import { useState } from "react";

function Videogallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const videos = [
    {
      title: "Class Dance",
      description: "Bachchon ka ek pyara dance performance.",
      url: "https://www.youtube.com/embed/k8kxfsghQMI?autoplay=1",
    },
    {
      title: "Fancy Dress Show",
      description: "School ke baccho ka fancy dress show.",
      url: "https://www.youtube.com/embed/n6GLy8Nf_YQ?autoplay=1",
    },
  ];

  return (
    <div className="w-full p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500 p-4 text-center">Video Gallery</h1>

      <div className="flex flex-col md:flex-row mt-4 justify-center items-center gap-6">
        <div className="flex overflow-x-auto space-x-6 min-w-max">
          <div className="flex flex-wrap gap-4 flex-col md:flex-row">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg bg-white w-80 flex-shrink-0"
              >
                <iframe
                  width="100%"
                  height="240"
                  src={video.url.replace("&autoplay=1", "")}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {video.title}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    {video.description}
                  </p>
                  <button
                    onClick={() => openModal(video.url)}
                    className="px-6 py-2.5 bg-blue-600 text-white text-xs font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8  gap-6 w-full">
          {/* Section 1 */}
          <div className="w-full max-w-xs h-96 bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <h2 className="text-lg font-semibold mb-2 text-center text-blue-700">
              Cultural & Academic Events
            </h2>
            <div className="overflow-hidden h-80 relative flex mx-auto">
              <ul className="animate-vertical-scroll space-y-3 flex items-center text-sm text-red-500">
                {[
                  "Annual Day Function",
                  "Republic Day Parade",
                  "Independence Day Skit",
                  "Quiz Competition",
                  "Science Exhibition",
                  "Debate Competition",
                  "Poem Recitation",
                  "Storytelling Contest",
                  "Math Olympiad",
                  "School Assembly Performance",
                  "Hindi Divas Program",
                  "English Elocution",
                  "Prize Distribution Ceremony",
                ].map((item, index) => (
                  <a href="#">
                  <li key={index} className="text-center bg-yellow-400 p-2 border-4 hover:text-white  border-white">
                    {item}
                  </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full max-w-xs h-96 bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <h2 className="text-lg font-semibold mb-2 text-center text-green-700">
              Creative & Outdoor Activities
            </h2>
            <div className="overflow-hidden h-80 relative">
              <ul className="animate-vertical-scroll space-y-3 text-sm text-red-500">
                {[
                  "Drawing Competition",
                  "Craft Making",
                  "Poster Designing",
                  "Sports Day Races",
                  "Yoga Session",
                  "Dance Practice",
                  "Singing Competition",
                  "Picnic Day",
                  "Nature Walk",
                  "PT Display",
                  "Gardening Activity",
                  "Fancy Dress Show",
                  "Art Exhibition",
                ].map((item, index) => (
                  <a href="#">
                  <li key={index} className="text-center  bg-yellow-400 p-2 border-4 hover:text-white  border-white">
                    {item}
                  </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50"
          onClick={closeModal} // Close on backdrop click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            <button
              className="absolute top-2 right-3 text-2xl font-bold bg-red-500 z-50 p-2 rounded-lg text-black hover:text-white"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="Popup Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videogallery;
