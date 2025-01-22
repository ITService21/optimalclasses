const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT =  process.env.PORT || 5001;
// const PORT = 5005;
const DATA_FILE = "./jsonDatabase/images.json";
const path = require("path");
const fileUpload = require("express-fileupload");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config(); 
// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");

console.log("allowedOrigins",allowedOrigins)
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request
      } else {
        callback(null, false); // Reject request without throwing an error
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies if needed
  })
);


// Handle pre-flight CORS requests
app.options("*", cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
}));

app.use(express.json());

app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
}));

// app.use(cors({
//   origin: 'http://localhost:3000',  // Allow requests from frontend on port 3000
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow methods
//   allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
// }));

// // Allow pre-flight OPTIONS requests for CORS
// app.options('*', cors()); // Handle pre-flight CORS request

// app.use(bodyParser.json());
// app.use(fileUpload());
//Images Manuplation
// Routes
const uploadDir = path?.join(__dirname, "../public/uploads");
if (!fs?.existsSync(uploadDir)) {
  fs?.mkdirSync(uploadDir, { recursive: true });
}

// Get all images
app.get("/images", (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err)
      return res.status(500).json({ message: "Unable to read data file" });
    res.json(JSON.parse(data));
  });
});

// Upload an image
app.post("/images", (req, res) => {
  const { title } = req?.body;
  const file = req?.files?.image;

  // Validate input
  if (!file || !title) {
    return res
      .status(400)
      .json({ message: "Image file and title are required." });
  }

  // Validate file type
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes?.includes(file?.mimetype)) {
    return res.status(400).json({
      message: "Invalid file type. Only .jpg, .jpeg, and .png are allowed.",
    });
  }

  // Define file path
  const filePath = path.join(uploadDir, `${Date.now()}-${file.name}`);

  // Move file to upload directory
  file?.mv(filePath, (err) => {
    if (err) {
      return res.status(500).json({ message: "Unable to save file." });
    }

    // Create new image entry
    const newImage = {
      src: `/uploads/${path.basename(filePath)}`,
      title,
    };

    // Read and update the JSON database
    fs.readFile(DATA_FILE, (err, data) => {
      if (err)
        return res.status(500).json({ message: "Unable to read data file." });

      const images = JSON.parse(data);
      images.push(newImage);

      fs.writeFile(DATA_FILE, JSON.stringify(images, null, 2), (err) => {
        if (err)
          return res.status(500).json({ message: "Unable to save data." });
        res.status(201).json(newImage);
      });
    });
  });
});

// app.delete('/images/:index', (req, res) => {
//   const index = parseInt(req.params.index, 10);

//   fs.readFile(DATA_FILE, (err, data) => {
//     if (err) return res.status(500).json({ message: 'Unable to read data file' });

//     const images = JSON.parse(data);
//     if (index < 0 || index >= images?.length) {
//       return res.status(404).json({ message: 'Image not found' });
//     }

//     const deletedImage = images?.splice(index, 1);

//     fs.writeFile(DATA_FILE, JSON.stringify(images, null, 2), (err) => {
//       if (err) return res.status(500).json({ message: 'Unable to save data' });
//       res.json(deletedImage);
//     });
//   });
// });

app.delete("/images/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);

  fs.readFile(DATA_FILE, (err, data) => {
    if (err)
      return res.status(500).json({ message: "Unable to read data file" });

    const images = JSON.parse(data);
    if (index < 0 || index >= images?.length) {
      return res.status(404).json({ message: "Image not found" });
    }

    const deletedImage = images?.splice(index, 1)[0]; // Extract the deleted image object

    // Delete the image from the filesystem
    fs.unlink(`../public/${deletedImage?.src}`, (err) => {
      if (err) {
        return res.status(500).json({ message: "Unable to delete image file" });
      }

      // After deleting the image, update the JSON file
      fs.writeFile(DATA_FILE, JSON.stringify(images, null, 2), (err) => {
        if (err)
          return res.status(500).json({ message: "Unable to save data" });
        res.json(deletedImage); // Return the deleted image data
      });
    });
  });
});

app.put("/images/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Invalid data" });
  }

  fs.readFile(DATA_FILE, (err, data) => {
    if (err)
      return res.status(500).json({ message: "Unable to read data file" });

    const images = JSON.parse(data);
    if (index < 0 || index >= images.length) {
      return res.status(404).json({ message: "Image not found" });
    }

    images[index].title = title;

    fs.writeFile(DATA_FILE, JSON.stringify(images, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Unable to save data" });
      res.json(images[index]);
    });
  });
});

//Video manuplation
const DATA_FILE_VIDEO = "./jsonDatabase/videos.json";

// Helper function to read/write video data
const getVideos = () => {
  if (fs.existsSync(DATA_FILE_VIDEO)) {
    return JSON.parse(fs.readFileSync(DATA_FILE_VIDEO, "utf8"));
  }
  return [];
};

const saveVideos = (videos) => {
  fs.writeFileSync(DATA_FILE_VIDEO, JSON.stringify(videos, null, 2));
};

// Routes
app.get("/videos", (req, res) => {
  const videos = getVideos();
  res.json(videos);
});

app.post("/videos", (req, res) => {
  const { title, description, url } = req.body;
  if (!title || !description || !url) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const videos = getVideos();
  const newVideo = { id: Date.now(), title, description, url };
  videos.push(newVideo);
  saveVideos(videos);

  res.status(201).json(newVideo);
});

app.delete("/videos/:id", (req, res) => {
  const { id } = req.params;
  let videos = getVideos();
  const videoExists = videos.some((video) => video.id === parseInt(id));

  if (!videoExists) {
    return res.status(404).json({ message: "Video not found." });
  }

  videos = videos.filter((video) => video.id !== parseInt(id));
  saveVideos(videos);

  res.status(200).json({ message: "Video deleted successfully." });
});

//Teacher
const DATA_FILE_TEACHER = "./jsonDatabase/teachers.json";

const loadTeachers = () => {
  if (fs.existsSync(DATA_FILE_TEACHER)) {
    const data = fs.readFileSync(DATA_FILE_TEACHER);
    return JSON.parse(data);
  }
  return [];
};

// Save teachers data to JSON file
const saveTeachers = (data) => {
  fs.writeFileSync(DATA_FILE_TEACHER, JSON.stringify(data, null, 2));
};

// Validate image type
const isValidImage = (file) => {
  return ["image/jpeg", "image/png", "image/jpg"]?.includes(file?.mimetype);
};

// Routes
app.get("/teachers", (req, res) => {
  const teachers = loadTeachers();
  res?.json(teachers);
});

app.post("/teachers", (req, res) => {
  // console.log("fbbdssdcs341", req)
  const { title, name, education, contact } = req.body;

  if (!req.files || !req?.files?.photo) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const photoFile = req?.files?.photo;

  // Check if the uploaded file is a valid image format
  if (!isValidImage(photoFile)) {
    return res.status(400).json({
      message: "Invalid file type. Only .jpg, .jpeg, .png are allowed.",
    });
  }

  // Move file to uploads directory ../public/uploads
  const photoPath = `../public/uploads/${Date.now()}-${photoFile.name}`;
  photoFile.mv(path.join(__dirname, photoPath), (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading the file" });
    }

    const teachers = loadTeachers();
    const newTeacher = {
      id: Date.now().toString(), // Unique ID
      title,
      name,
      education,
      contact,
      photo: photoPath, // Set photo path
    };

    teachers.push(newTeacher);
    saveTeachers(teachers);

    res.json(newTeacher);
  });
});

// app.put("/teachers/:id", (req, res) => {
//   console.log("sdsbssbsdf453",req?.body)
//   const { id } = req?.params;
//   const { title, name, education, contact } = req?.body;

//   let photo = req?.body?.photo; // If no new photo is uploaded, retain the existing photo

//   if (req?.files && req?.files?.photo) {
//     const photoFile = req?.files?.photo;

//     // Validate the image format
//     if (!isValidImage(photoFile)) {
//       return res.status(400).json({
//         message: "Invalid file type. Only .jpg, .jpeg, .png are allowed.",
//       });
//     }

//     // Move file to uploads directory
//     photo = `../public/uploads/${Date.now()}-${photoFile?.name}`;
//     photoFile.mv(path.join(__dirname, photo), (err) => {
//       if (err) {
//         return res.status(500).json({ message: "Error uploading the file" });
//       }
//     });
//   }

//   const teachers = loadTeachers();
//   const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);

//   if (teacherIndex === -1) {
//     return res.status(404).json({ message: "Teacher not found" });
//   }

//   if (req?.files && req?.files?.photo) {
//     teachers[teacherIndex] = {
//       ...teachers[teacherIndex],
//       title,
//       name,
//       education,
//       contact,
//       photo,
//     };
//   } else {
//     teachers[teacherIndex] = {
//       ...teachers[teacherIndex],
//       title,
//       name,
//       education,
//       contact,
//     };
//   }

//   saveTeachers(teachers);

//   res.json(teachers[teacherIndex]);
// });

app.put("/teachers/:id", (req, res) => {
  console.log("fgbdbfgd43", req);
  const { id } = req?.params;
  const { title, name, education, contact } = req?.body;

  let photo = req?.body?.photo; // Retain the existing photo if no new one is uploaded

  if (req?.files && req?.files?.photo) {
    const photoFile = req?.files?.photo;

    // Validate the image format
    if (!isValidImage(photoFile)) {
      return res.status(400).json({
        message: "Invalid file type. Only .jpg, .jpeg, .png are allowed.",
      });
    }

    // Generate new photo path
    photo = `../public/uploads/${Date.now()}-${photoFile.name}`;
    const uploadPath = path.join(__dirname, "../public/", photo);

    // Move file to uploads directory
    photoFile.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error uploading the file" });
      }
    });
  }

  // Load the current list of teachers
  const teachers = loadTeachers();
  const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);

  if (teacherIndex === -1) {
    return res.status(404).json({ message: "Teacher not found" });
  }

  const existingPhoto = teachers[teacherIndex]?.photo;

  // Update the teacher record
  teachers[teacherIndex] = {
    ...teachers[teacherIndex],
    title,
    name,
    education,
    contact,
    photo: photo || existingPhoto, // Use new photo if uploaded, otherwise keep the existing one
  };

  // Save updated teacher data
  saveTeachers(teachers);

  // If a new photo was uploaded, delete the old photo
  if (req?.files && req?.files?.photo && existingPhoto) {
    const oldPhotoPath = path.join(__dirname, "../public/", existingPhoto);

    fs.unlink(oldPhotoPath, (err) => {
      if (err) {
        console.error(`Failed to delete old photo: ${err.message}`);
        // Log the error but don't fail the request
      }
    });
  }

  res.json(teachers[teacherIndex]);
});

app.delete("/teachers/:id", (req, res) => {
  const { id } = req.params;

  const teachers = loadTeachers();
  // Find the teacher to delete
  const teacherToDelete = teachers.find((teacher) => teacher.id === id);

  if (Array.isArray(teacherToDelete) && teacherToDelete?.length === 0) {
    return res.status(404).json({ message: "Teacher not found" });
  }

  // Filter out the deleted teacher
  const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);

  // Delete the teacher's image file

  console.log("sggfsbg34", teacherToDelete);

  fs.unlink(teacherToDelete?.photo, (err) => {
    if (err) {
      console.error("Error deleting image:", err.message);
      return res.status(500).json({ message: "Error deleting image file" });
    }

    // Save the updated teachers list to the JSON file
    fs.writeFile(
      DATA_FILE_TEACHER,
      JSON.stringify(updatedTeachers, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error saving updated data", error: err.message });
        }

        res.json({ message: "Teacher deleted successfully" });
      }
    );
  });
});

//Admin Login
const usersDB = JSON.parse(
  fs.readFileSync("./jsonDatabase/adminProfile.json", "utf8")
);

app.use(cors());
app.use(bodyParser.json());

// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = usersDB.find((user) => user.email === email);
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return res.json({ success: true });
  }

  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
});


app.post("/contact", async (req, res) => {
  console.log("fvvddvdsvd",req)
  const { firstname, lastname, email, countrycode, phonenumber, message } =
    req.body;

  try {
    // Configure your email transpor
    console.log("sfgsg34", process.env)
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Compose the email
    const mailOptions = {
      from: email, // Sender email
      to: process.env.EMAIL_USER, // Recipient email
      subject: "Students Enquiry through Contact Form.",
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Country Code: ${countrycode}
        Phone Number: ${phonenumber}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
