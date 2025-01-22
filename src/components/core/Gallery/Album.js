import React, { useEffect, useState } from 'react';
import ImageList from './ImageList';
import AddImageForm from './AddImageForm';
import axios from 'axios';
import { toast } from "react-hot-toast";
export default function Album() {
  const [images, setImages] = useState([]);
  const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL;


  // const API_URL =
  // process.env.NODE_ENV === 'production'
  //   ? 'https://your-live-domain.com/images' // Live server URL
  //   : 'http://localhost:5005/images'; // Development URL

  // const API_URL = `http://localhost:5005/images`;
  const API_URL = `${apiUrl?apiUrl:""}/images`;

  const fetchImages = async () => {
    try{   const response = await axios.get(API_URL);
      setImages(response.data)}
      catch(error){
        toast.error("Image Fetched Failed!")
      }
  };

  // Add image
  const addImage = async (newImage) => {
    try{
      // await axios.post(API_URL, newImage);
      // fetchImages();
      toast.succees("Image Added Successfully!")
    }
    catch(error){
      // toast.error("Image Adding Failed!")
    }
  };

  // Delete image
  const deleteImage = async (index) => {
    try{
      await axios.delete(`${API_URL}/${index}`);
      toast.success("Image Deleted Successfully!")
      fetchImages();
    }
    catch(error){
      toast.error("Image Deletion Failed!")
    }
  };

  // Update image
  const updateImageTitle = async (index, newTitle) => {
    await axios.put(`${API_URL}/${index}`, { title: newTitle });
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
     <div className="">
      <ImageList
        images={images}
        onDeleteImage={deleteImage}
        onUpdateTitle={updateImageTitle}
        addImage={addImage}
        fetchImages={fetchImages}
      />
        {/* <AddImageForm onAddImage={addImage} /> */}
    </div>
  );
}
