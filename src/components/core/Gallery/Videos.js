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

  useEffect(() => {
    if (title && description && url) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [title, description, url]);

  const fetchVideos = async () => {
    try {
    //   const response = await axios.get("http://localhost:5005/videos");
      const response = await axios.get(`${apiUrl?apiUrl:""}/videos`);
      setVideos(response.data);
    } catch (error) {
      toast.error("Video Loading Failed!");
      console.error("Error fetching videos:", error);
    }
  };

  const handleAddVideo = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
    //   const response = await axios.post("http://localhost:5005/videos", {
      const response = await axios.post(`${apiUrl?apiUrl:""}/videos`, {
        title,
        description,
        url,
      });
      setVideos((prev) => [...prev, response?.data]);
      setTitle("");
      setDescription("");
      setUrl("");
      toast.success("Video Added Successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Video Addition Failed!");
      console.error("Error adding video:", error);
    }
  };

  const handleDeleteVideo = async (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        // await axios.delete(`http://localhost:5005/videos/${id}`);
        await axios.delete(`${apiUrl?apiUrl:""}/videos/${id}`);
        setVideos((prev) => prev?.filter((video) => video?.id !== id));
        toast.success("Video Deleted Successfully!");
      } catch (error) {
        toast.error("Video Deletion Failed!");
        console.error("Error deleting video:", error);
      }
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {paginatedVideos.map((video) => {
            return (
              <div key={video.id} className="mb-4 border p-2 rounded">
                <div className="video-container">
                  {/* Link to the YouTube channel */}
                  <a
                    href="https://www.youtube.com/@CHANNEL_NAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    {/* Embedded YouTube Video */}
                    <iframe
                      width="100%"
                      height="315"
                      src={video?.url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </a>
                </div>

                <h3 className="text-lg font-rubik-vinyl font-bold my-1 max-h-[60px] overflow-hidden">
                  {video.title}
                </h3>
                <p className="font-rubik-vinyl overflow-y-auto max-h-[120px]">
                  {video.description}
                </p>
                {isAdmin && (
                  <div className="text-center">
                    <button
                      onClick={() => handleDeleteVideo(video?.id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded mt-2 mx-auto"
                    >
                      Delete Video
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {(page === totalPages &&
            isAdmin &&
            videos?.length <= videoCapacity) ||
          videos?.length === 0 ? (
            isAdmin ? (
              <div className="bg-[#9f9f9f] mb-10 mt-2">
                <h2 className="text-[#750f0f] font-bold text-center text-[34px] font-rubik-vinyl my-2 pb-">
                  Add Video
                </h2>
                <form onSubmit={handleAddVideo} className="mb-4">
                  <div className="mx-3">
                    <input
                      type="text"
                      placeholder="Video Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border p-2 w-full mb-2"
                      required
                    />
                  </div>
                  <div className="mx-3">
                    <textarea
                      placeholder="Video Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border p-2 w-full mb-2"
                      required
                    />
                  </div>
                  <div className="mx-3">
                    <input
                      type="url"
                      placeholder="YouTube URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="border p-2 w-full mb-2"
                      required
                    />
                  </div>
                  <div className="mx-3 text-center">
                    <Button
                      disabled={btnDisable}
                      loading={loading}
                      type="submit"
                      text="Add Video"
                      className="bg-[#2dc032] hover:bg-green-700 mx-auto text-center text-white px-4 py-2 rounded m-1 h-[40px] w-[70vw] md:w-[20vw]"
                    ></Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className=" my-[100px] w-[100vw] -ml-[4vw] text-[#696969] text-[16px] md:text-[20px] lg:text-[24px] font-rubik-vinyl font-bold text-center pt-6 md:pt-10 pb-6">
               OOPS! No any Video Uploaded Yet!
              </div>
            )
          ) : (
            page === totalPages &&
            isAdmin && (
              <div className="bg-[#bc0000] font-rubik-vinyl text-white rounded-md p-4">
                <h2 className="text-center text-[20px]">Warning!!!</h2>
                Sorry, you cannot upload more than {videoCapacity + 1} videos to
                this server. If you want to store more videos, you need to
                purchase a paid server database plan. Kindly contact your
                Website Service Partner to upgrade your plan, or you can delete
                previous videos to make space for new ones. This limit is set to
                save your server bandwidth. Thank you!
              </div>
            )
          )}
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
