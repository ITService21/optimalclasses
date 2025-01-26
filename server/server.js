const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Import Models
const AdminProfile = require("./models1/AdminProfile");
const Image = require("./models1/Images");
const Teacher = require("./models1/Teachers");
const Video = require("./models1/Videos");

// Admin Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await AdminProfile.findOne({ email });
  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt?.compare(password, user.password);
  if (isPasswordValid) {
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// Image Routes
// Upload Image
app.post("/images", (req, res) => {
  const { title } = req.body;
  console.log("fbfdsfdf", req.files?.image)
  const file = req.files?.image;

  if (!file || !title) {
    return res.status(400).json({ message: "Image file and title are required." });
  }

  // Validate file type
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    return res.status(400).json({
      message: "Invalid file type. Only .jpg, .jpeg, and .png are allowed.",
    });
  }

  // Create a new Image document
  const newImage = new Image({
    title,
    image: {
      data: file.data,
      contentType: file.mimetype,
    },
  });

  // Save the image to MongoDB
  newImage
    .save()
    .then((savedImage) => {
      res.status(201).json(savedImage);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error saving image to database", error: err });
    });
});

// Get all Images
app.get("/images", (req, res) => {
  Image.find()
    .then((images) => {
      const imageUrls = images?.map((image) => ({
        id: image._id,
        title: image.title,
        url: `${process.env.BACKEND_URL}/images/${image._id}`, // Returning the URL
      }));
      res.json(imageUrls);
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to fetch images", error: err });
    });
});

app.get("/images/:id", (req, res) => {
  const { id } = req.params;

  Image.findById(id)
    .then((image) => {
      if (!image) {
        return res.status(404).json({ message: "Image not found" });
      }

      res.contentType(image.image.contentType); // Set the correct content type
      res.send(image.image.data); // Send image data as the response
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to fetch image", error: err });
    });
});  

// Get Image by ID
app.delete("/images/:id", (req, res) => {
  const { id } = req.params;

  Image.findByIdAndDelete(id)
    .then((deletedImage) => {
      if (!deletedImage) {
        return res.status(404).json({ message: "Image not found" });
      }

      res.status(200).json({ message: "Image deleted successfully", deletedImage });
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to delete image", error: err });
    });
});


// Teacher Routes
// Add Teacher
app.post("/teachers", (req, res) => {
  const { title, name, education, contact } = req.body;
  const file = req.files?.photo;

  if (!file || !title || !name || !education || !contact) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Validate image file type
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    return res.status(400).json({
      message: "Invalid file type. Only .jpg, .jpeg, .png are allowed.",
    });
  }

  const newTeacher = new Teacher({
    title,
    name,
    education,
    contact,
    photo: {
      data: file.data,
      contentType: file.mimetype,
    },
  });

  newTeacher
    .save()
    .then((savedTeacher) => res.status(201).json(savedTeacher))
    .catch((err) => res.status(500).json({ message: "Error saving teacher to database", error: err }));
});

// Get all Teachers
// app.get("/teachers", (req, res) => {
//   Teacher.find()
//     .then((teachers) => {
//       res.json(teachers);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Unable to fetch teachers", error: err });
//     });
// });
app.get("/teachers", (req, res) => {
  Teacher.find()
    .then((teachers) => {
      if (!teachers || teachers.length === 0) {
        return res.status(404).json({ message: "No teachers found" });
      }

      const teacherData = teachers?.map((teacher) => ({
        _id: teacher._id,
        title: teacher.title,
        name: teacher.name,
        education: teacher.education,
        contact: teacher.contact,
        photoUrl: teacher.photo
          // ? `http://localhost:5005/teachers/${teacher._id}/photo`
          ? `${process.env.BACKEND_URL}/teachers/${teacher._id}/photo`
          : null, // Provide photo URL or null if no photo exists
      }));

      res.status(200).json(teacherData);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching teachers", error: err })
    );
});

app.get("/teachers/:id/photo", (req, res) => {
  const { id } = req.params;

  Teacher.findById(id)
    .then((teacher) => {
      if (!teacher || !teacher.photo) {
        return res.status(404).json({ message: "Photo not found" });
      }

      res.contentType(teacher.photo.contentType); // Set the content type
      res.send(teacher.photo.data); // Send the binary data
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching photo", error: err })
    );
});



// Update Teacher
app.put("/teachers/:id", (req, res) => {
  const { id } = req.params;
  const { title, name, education, contact } = req.body;
  let photo = req.body?.photo;

  if (req.files?.photo) {
    const photoFile = req.files?.photo;
    if (!["image/jpeg", "image/png", "image/jpg"].includes(photoFile.mimetype)) {
      return res.status(400).json({ message: "Invalid file type" });
    }

    photo = {
      data: photoFile.data,
      contentType: photoFile.mimetype,
    };
  }

  Teacher.findById(id)
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }

      teacher.title = title || teacher.title;
      teacher.name = name || teacher.name;
      teacher.education = education || teacher.education;
      teacher.contact = contact || teacher.contact;
      teacher.photo = photo || teacher.photo;

      return teacher.save();
    })
    .then((updatedTeacher) => res.json(updatedTeacher))
    .catch((err) => res.status(500).json({ message: "Error updating teacher", error: err }));
});

// Delete Teacher
app.delete("/teachers/:id", (req, res) => {
  const { id } = req.params;

  Teacher.findByIdAndDelete(id)
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }

      res.json({ message: "Teacher deleted successfully", teacher });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting teacher", error: err });
    });
});


// Video Routes
// Add Video
app.post("/videos", (req, res) => {
  const { title, description, url } = req.body;
  if (!title || !description || !url) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newVideo = new Video({ title, description, url });

  newVideo
    .save()
    .then((savedVideo) => res.status(201).json(savedVideo))
    .catch((err) => res.status(500).json({ message: "Error saving video", error: err }));
});

// Get All Videos
app.get("/videos", (req, res) => {
  Video.find()
    .then((videos) => res.json(videos))
    .catch((err) => res.status(500).json({ message: "Unable to fetch videos", error: err }));
});

app.delete("/videos/:id", (req, res) => {
  const { id } = req.params;

  Video.findByIdAndDelete(id)
    .then((deletedVideo) => {
      if (!deletedVideo) {
        return res.status(404).json({ message: "Video not found" });
      }

      res.status(200).json({ message: "Video deleted successfully", deletedVideo });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting video", error: err });
    });
});


// Contact Form
app.post("/contact", async (req, res) => {
  const { firstname, lastname, email, countrycode, phoneNo, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Students Enquiry through Contact Form.",
      text: `
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Country Code: ${countrycode}
        Phone Number: ${phoneNo}
        Message: ${message}
      `,
    };

    console.log("mainObject1",mailOptions)
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
