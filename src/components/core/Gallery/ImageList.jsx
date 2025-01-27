import React, { useState, useEffect, useCallback } from "react";
import AddImageForm from "./AddImageForm";
import {gallery} from "../../../data/galleryimages"
// ImageItem Component to be memoized
const ImageItem = React.memo(({ imgObj, index, isAdmin, onDeleteImage }) => {
  const handleDelete = useCallback(() => {
    const confirmDelete = window?.confirm(
      "Are you sure you want to delete this image?"
    );
    if (confirmDelete) {
      onDeleteImage(index);
    }
  }, [index, onDeleteImage]);

  return (
    <div className="relative rounded-md overflow-hidden">
      {/* Delete Button with Confirmation */}
      {isAdmin && (
        <button
          onClick={handleDelete}
          className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm shadow-md hover:bg-red-600"
        >
          ✕
        </button>
      )}

      <div className="w-full">
        <img
          src={imgObj?.url}
          className="w-full aspect-[400/300] h-full object-contain bg-gradient-to-b from-[#EE9CA7] to-[#cbfe90]"
          alt="Img not load"
          loading="lazy"
        />
      </div>
      <div className="text-center text-[#ffffff] font-rubik-vinyl text-[20px] bg-[#b0203c] pt-2 pb-5">
        {imgObj?.title}
      </div>
    </div>
  );
});

function ImageList({ images, onDeleteImage, addImage, fetchImages }) {
    const isAdmin = localStorage.getItem("isAdmin");
  const imageCapacity = 59;
  const imagesPerPage = 12;

  const [page, setPage] = useState(1);

  // Memoize the images array
  const imageArray = React.useMemo(() => [...images], [images]);

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
    Math.ceil(imageArray.length / imagesPerPage) === 0
      ? 1
      : Math.ceil(imageArray.length / imagesPerPage);

  useEffect(() => {
    console.log("Page changed to:", page);
    // Scroll to the top of the page when the page changes
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="bg-[#ffffff] pb-10 px-3 md:px-12 lg:px-14">
      <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
        Our Memories
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gallery?.slice(startIndex, endIndex).map((imgObj, index) => {
          console.log("length1", imageArray?.length, "index", index);
          return (
            <>
              <ImageItem
                key={index}
                imgObj={imgObj}
                index={index + startIndex} // Adjusting the index based on the current page
                isAdmin={isAdmin}
                onDeleteImage={ ()=>{
                  onDeleteImage(imgObj?.id)
                }}
              />
            </>
          );
        })}
        {page === totalPages &&
          isAdmin &&
          (imageArray?.length <= imageCapacity ? (
            <div className="mt-10">
              <AddImageForm onAddImage={addImage} fetchImages={fetchImages} />
            </div>
          ) : (
            page === totalPages &&
            isAdmin && (
              <div className="bg-[#bc0000] font-rubik-vinyl text-white rounded-md p-4 my-auto">
                <h2 className="text-center text-[20px]">Warning!!!</h2>
                Sorry, you cannot upload more than {imageCapacity + 1} images to
                this server. If you want to store more images, you need to
                purchase a paid server database plan. Kindly contact your
                Website Service Partner to upgrade your plan, or you can delete
                previous images to make space for new ones. Thank you!
              </div>
            )
          ))}
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

export default ImageList;
