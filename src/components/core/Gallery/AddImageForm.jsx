import React, { useState, useEffect } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { toast } from "react-hot-toast";
import Button from "../../common/Button";

function AddImageForm({ onAddImage, fetchImages }) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL;

  const [file, setFile] = useState(null); // File object
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    if (file && title) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [file, title]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (file && title) {
      try {
        const options = {
          maxSizeMB: 0.1, // Target maximum file size (in MB, 100 KB = 0.1 MB)
          useWebWorker: true, // Enable web workers for performance
        };

        const compressedFile = await imageCompression(file, options);

        console.log("file_name", file, file?.name);
        // Create FormData
        const formData = new FormData();
        formData?.append("image", compressedFile, file?.name); // Attach compressed file
        formData?.append("title", title);

        // Send to server
        const response = await axios.post(
        //   "http://localhost:5005/images",
          `${apiUrl}/images`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setFile(null);
        setTitle("");
        fetchImages();
        setLoading(false);
        toast.success("Image Added Successfully!");
      } catch (error) {
        console.log("dfvsvss341", error);
        setLoading(false);
        if (
          error?.response?.data?.message ===
          "Invalid file type. Only .jpg, .jpeg, and .png are allowed."
        ) {
          toast.error(
            <>Invalid Image type. Only .jpg, .jpeg, and .png are allowed.</>,
            {
              closeOnClick: true, // Enables closing the toast by clicking it
              autoClose: 3000, // Automatically closes after 3 seconds
              hideProgressBar: false, // Shows the progress bar
              closeButton: true, // Ensures the close button is displayed
              draggable: true, // Allows dragging to dismiss
            }
          );
        } else {
          toast.error("Image Uploading Failed!");
        }
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleRemoveImage = () => {
    setFile(null); // Clear the selected file
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col items-center bg-[#7c7c7c] py-4">
        <h2 className="text-white font-bold text-[24px] font-rubik-vinyl">
          Add Image
        </h2>
        <div className="mx-auto">
          {!file && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 flex-1 w-[50vw] md:w-[15vw] m-1"
            />
          )}
        </div>

        {file && (
          <div className="my-2 relative">
            <img
              src={URL.createObjectURL(file)}
              alt="Selected Img"
              className="w-32 h-32 object-cover mb-2 rounded-md "
            />
            {/* Cross icon to remove the image */}
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute font-thin top-0 right-0 bg-red-500 bg-[#ff1515] opacity-[0.8] text-white p-1 aspect-[1/1]"
            >
              ✕
            </button>
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="Insert Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 flex-1  rounded-md m-1 w-[70vw] md:w-[20vw]"
            required={true}
          />
        </div>
        <Button
          disabled={btnDisable}
          loading={loading}
          type="submit"
          text="Upload"
          className="bg-[#2dc032] hover:bg-green-700 mx-auto text-center text-white px-4 py-2 rounded m-1 h-[40px] w-[70vw] md:w-[20vw]"
        ></Button>
      </div>
    </form>
  );
}

export default AddImageForm;
