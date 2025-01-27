import React, { useEffect, useState } from 'react';
import ImageList from './ImageList';
import AddImageForm from './AddImageForm';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { gallery } from "../../../data/galleryimages"
export default function Album() {
  const [images, setImages] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL;

  const imageCapacity = 59;
  const imagesPerPage = 12;

  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Calculate total pages
  const totalPages =
    Math.ceil(gallery?.length / imagesPerPage) === 0
      ? 1
      : Math.ceil(gallery?.length / imagesPerPage);

  useEffect(() => {
    console.log("Page changed to:", page);
    // Scroll to the top of the page when the page changes
    window.scrollTo(0, 0);
  }, [page]);


  return (
    <div className="bg-[#ffffff] pb-10 px-3 md:px-12 lg:px-14">
      <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
        Our Album
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gallery?.slice(startIndex, endIndex).map((imgObj, index) => {
          return <div className="relative rounded-md overflow-hidden">
    
          <div className="w-full">
            <img 
              src={imgObj?.src}
              className="w-full aspect-[400/300] h-full object-contain bg-gradient-to-b from-[#EE9CA7] to-[#cbfe90]"
              alt="Img not load"
              loading="lazy"
            />
          </div>
          <div className="text-center text-[#ffffff] font-rubik-vinyl text-[20px] bg-[#b0203c] pt-2 pb-5">
            {imgObj?.title}
          </div>
        </div>
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        {/* Previous Button */}
        <button
          className="text-[#242424] border-[1px] border-[#a5a5a5] py-2 px-4 bg-[#dadada] hover:bg-[#afafaf] font-roboto"
          onClick={handlePreviousPage}
          disabled={page <= 1}
        >
          Previous
        </button>

        {/* Page Number */}
        <div className="text-[#242424] py-2 px-4">
          Page {page} of {totalPages}
        </div>

        {/* Next Button */}
        <button
          className="text-[#242424] border-[1px] border-[#a5a5a5] py-2 px-4 bg-[#dadada] hover:bg-[#afafaf] font-roboto"
          onClick={handleNextPage}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
