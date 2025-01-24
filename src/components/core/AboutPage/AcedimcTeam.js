import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import imageCompression from "browser-image-compression";
import Button from "../../common/Button";
import Input from "../../common/Input";

function AcademicTeam() {
  const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL_PROD  
  : process.env.REACT_APP_API_URL;  

  const isAdmin = localStorage.getItem("isAdmin");
  const teacherCapacity = 9;
  const fileInputRef = useRef(null); // Add a ref for the file input
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    education: "",
    contact: "",
    photo: null,
    photoPreview: null,
  });
 
  useEffect(() => {
    if (
      formData?.title &&
      formData?.name &&
      formData?.education &&
      formData?.contact &&
      (formData?.photo || formData?.photoPreview)
    ) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [formData]);

  const options = {
    maxSizeMB: 0.1, // Target maximum file size (100 KB)
    useWebWorker: true, // Enable web workers for performance
  };

  const fetchTeachers = async () => {
    try {
      // const { data } = await axios.get(`${apiUrl}/teachers`);
      const data = await axios.get(`${apiUrl}/teachers`);
      setTeachers(data?.data);
    } catch (error) {
      toast.error("Fetching Teacher's Data Failed!");
      console.error("Failed to fetch teachers data: ", error);
    }
  };

  const addTeacher = async (form) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/teachers`, form);
      toast.success("Teacher Added Successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Adding Teacher Failed!");
      console.error("Failed to add teacher: ", error);
    }
  };

  const updateTeacher = async (form) => {
    try {
      // const response = await axios.put(
      //   `http://localhost:5005/teachers/${formData?.id}`,
      //   form
      // );
      const response = await axios.put(
        `${apiUrl}/teachers/${formData?._id}`,
        form
      );
      toast.success("Teacher's Detail Updated Successfully!");
    } catch (error) {
      toast.error("Teacher Updation Failed!");
      console.error("Failed to update teacher: ", error);
    }
  };

  // useEffect(()=>{
  //   console.log("form54", form)
  // })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData?.contact?.toString()?.length !== 10) {
        toast.error("Contact number should be of 10 digit");
        return;
      }
      if (
        !["image/jpeg", "image/png", "image/jpg"].includes(
          formData?.photo?.type
        ) &&
        formData?.photo
      ) {
        toast.error(
          "Invalid Image type. Only .jpg, .jpeg, and .png are allowed."
        );
        return;
      }

      const compressedPhoto = formData?.photo
        ? await imageCompression(formData?.photo, options)
        : null;

      const form = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "photoPreview") {
          // if (key === "photo"&&formData?.photo) {
          if (key === "photo") {
            console.log("vdsvsdsv42", key, "dfgdf", value);
            if (value) {
              form.append(key, compressedPhoto, formData?.photo?.name);
            }
          } else {
            form.append(key, value);
          }
        }
      });

      // Perform further operations after appending Base64 `photo`
      // e.g., submit the form

      if (formData?._id) {
        await updateTeacher(form);
      } else {
        await addTeacher(form);
      }
      fetchTeachers()
    } catch (error) {
      console.error("Error handling form submission: ", error);
      toast.error("Something went wrong!");
    }

    fetchTeachers();
    setFormData({
      title: "",
      name: "",
      education: "",
      contact: "",
      photo: null,
      photoPreview: null,
    });

    // Reset file input value
    if (fileInputRef?.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (_id) => {
    try {
      if (window?.confirm("Are you sure you want to delete this teacher?")) {
        // await axios.delete(`http://localhost:5005/teachers/${id}`);
        await axios.delete(`${apiUrl}/teachers/${_id}`);
        fetchTeachers();
        toast.success("Teacher Deleted Successfully!");
      }
    } catch (error) {
      toast.error("Teacher Deletion Failed!");
      console.error("Failed to delete teacher: ", error);
    }
  };

  const handleEdit = (teacher) => {
    setFormData({
      ...teacher,
      photo: null,
      photoPreview: teacher?.photo
        ? teacher.photo 
        : null,
    });
  };

  const handleFileChange = (e) => {
    const file = e?.target?.files[0];

    if (!["image/jpeg", "image/png", "image/jpg"].includes(file?.type)) {
      toast.error(
        "Invalid Image type. Only .jpg, .jpeg, and .png are allowed."
      );
      if (fileInputRef?.current) {
        fileInputRef.current.value = "";
      }
      setFormData({
        ...formData,
        photo: null,
        photoPreview: null,
      });
      return;
    }
    setFormData({ ...formData, photo: file });
    if (file) {
      const previewURL = URL?.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photoPreview: previewURL }));
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="w-[100vw] bg-[#ffffff] bg-gradient-to-b from-[#ffe6e9] to-[#cbfe90]">
      <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
        Our Academic Team
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 list-none ">
      {teachers?.map((teacher) => {
          console.log("dhdhh43",teacher)
          return <li
            key={teacher?._id}
            className="bg-gradient-to-b py-6 from-[#64d1cf] to-[#64d1cf] mx-[10px] md:mx-[200px] lg:mx-[300px] pb-10 mb-10 rounded-md"
          >
            <img
              src={teacher?.photoUrl}
              alt={teacher?.name}
              className="w-[250px] h-[250px] mx-auto"
            />
            <h3 className="font-rubik-vinyl font-bold text-[24px] md:text-[30px] text-center">
              {teacher?.title}
            </h3>
            <p className="font-rubik-vinyl font-bold text-[20px] md:text-[24px] text-center">
              {teacher?.name}
            </p>
            <p className="font-rubik-vinyl font-bold text-[18px] md:text-[22px] text-center">
              {teacher?.education}
            </p>
            <p className="font-rubik-vinyl font-bold text-[16px] md:text-[18px] text-center">
              {teacher?.contact}
            </p>
            {isAdmin && (
              <div className="text-center">
                <button
                  className="bg-[#ff2323] hover:bg-[#c73030] px-4 border-[1px] border-black"
                  onClick={() => handleEdit(teacher)}
                >
                  {formData?._id === teacher?._id
                    ? "Go to 'Add Teacher' form below"
                    : "Edit"}
                </button>
                <button
                  className="bg-[#ff2323] hover:bg-[#c73030] px-4 border-[1px] border-black"
                  onClick={() => handleDelete(teacher?._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        }
        )}

        {(isAdmin && teachers?.length <= teacherCapacity) ||
        (formData?._id && isAdmin) ? (
          <div className="bg-[#9f9f9f] mb-10 mt-2 md:w-[50%] mx-auto">
            <h2 className="text-[#750f0f] font-bold text-center text-[34px] font-rubik-vinyl my-2">
              {formData._id ? "Update Teacher Here" : "Add Teacher"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                className="py-1 px-2 rounded-sm mx-4"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="py-1 px-2 rounded-sm mx-4"
                required
              />
              <input
                type="text"
                placeholder="Education"
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
                className="py-1 px-2 rounded-sm mx-4"
                required
              />
              <div className="mx-4">
                <Input
                  type="number"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                  }}
                  required={true}
                  className="py-1 px-2 rounded-sm w-full"
                />
              </div>
              <div className="file-input-wrapper py-1 px-2 rounded-sm mx-4">
                <label className="file-input-label">
                  Choose Photo Here:
                  <input
                    ref={fileInputRef} // Attach the ref here
                    type="file"
                    onChange={handleFileChange}
                    className="hidden-file-input ml-2"
                    required={!formData?._id}
                  />
                </label>
              </div>
              {formData?.photoPreview && (
                <div className="text-center mt-4">
                  <img
                    src={formData.photoPreview}
                    alt="Selected Preview"
                    className="w-[150px] h-[150px] mx-auto rounded"
                  />
                </div>
              )}
              <div className="text-center">
                <Button
                  disabled={loading}
                  loading={loading}
                  type="submit"
                  className="bg-[#2dc032] hover:bg-green-700 text-white px-4 py-2 rounded mx-auto m-1 w-[70vw] md:w-[20vw] mb-12"
                  text={formData?._id ? "Update Teacher" : "Add Teacher"}
                ></Button>
              </div>
            </form>
          </div>
        ) : isAdmin ? (
          <div className=" font-rubik-vinyl text-white rounded-md p-4 my-auto px-6 mb-12">
            <div className=" bg-[#bc0000] w-[50%] mx-auto p-4">
              {" "}
              <h2 className="text-center text-[20px]">Warning!!!</h2>
              Sorry, you cannot upload more than {teacherCapacity + 1} teacher
              to this server. If you want to store more teacher, you need to
              purchase a paid server database plan. Kindly contact your Website
              Service Partner to upgrade your plan, or you can delete previous
              teacher to make space for new ones. Thank you!
            </div>
          </div>
        ) : (
          <div className=" my-[100px] w-[100vw]  text-[#696969] text-[16px] md:text-[20px] lg:text-[24px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
            OOPS! No any Teacher Details Uploaded Yet!
          </div>
        )}
      </ul>
    </div>
  );
}

export default AcademicTeam;
