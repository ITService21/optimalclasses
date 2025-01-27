import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Button from "../../common/Button";

function VideoManager() {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL;

  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1); // State for pagination
  const [loading, setLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin");
  const videoCapacity = 7;
  const videosPerPage = 4; // Videos per page

  // Calculate the indices for the current page's videos
  const startIndex = (page - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  // Paginated list of videos
  const paginatedVideos = videos.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages =
    Math.ceil(videos.length / videosPerPage) === 0
      ? 1
      : Math.ceil(videos.length / videosPerPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="">
      <div className="bg-[#ffffff] pb-10 px-3 md:px-12 lg:px-14">
        <div className="text-[#db2929] text-[36px] md:text-[42px] lg:text-[50px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
          Our Videos
        </div>

        <div className=" my-[100px] w-[100vw] -ml-[4vw] text-[#696969] text-[16px] md:text-[20px] lg:text-[24px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
          OOPS! No any Video Uploaded Yet!
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-4 mb-16">
          {/* Previous Button */}
          <button
            className="text-[#242424] border-[1px] border-[#a5a5a5] py-2 px-4 bg-[#dadada] hover:bg-[#afafaf] font-roboto"
            onClick={handlePreviousPage}
            disabled={page === 1}
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
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        {/* Add Video Form */}
      </div>
    </div>
  );
}


export default VideoManager;
