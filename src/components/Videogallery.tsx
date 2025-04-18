// import React from 'react';

function Videogallery() {
  return (
    <div className="w-full p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500 p-4">Video Gallery</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Video Gallery */}
        <div className="flex overflow-x-auto space-x-6 min-w-max">
          <div className="flex flex-wrap gap-4">
            {/* First Video Card */}
            <div className="rounded-lg shadow-lg bg-white w-80 flex-shrink-0">
              <iframe
                width="100%"
                height="240"
                src="https://www.youtube.com/embed/k8kxfsghQMI?list=PLcfLhyDGanwD0ny6azjb5mXYFqtOHbSbv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-lg"
              ></iframe>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Class Dance
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Bachchon ka ek pyara dance performance.
                </p>
                <button className="px-6 py-2.5 bg-blue-600 text-white text-xs font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150">
                  Watch Now
                </button>
              </div>
            </div>

            {/* Second Video Card */}
            <div className="rounded-lg shadow-lg bg-white w-80 flex-shrink-0">
              <iframe
                width="100%"
                height="240"
                src="https://www.youtube.com/embed/n6GLy8Nf_YQ?list=PLcfLhyDGanwD0ny6azjb5mXYFqtOHbSbv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-lg"
              ></iframe>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Fancy Dress Show
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  School ke baccho ka fancy dress show.
                </p>
                <button className="px-6 py-2.5 bg-blue-600 text-white text-xs font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Activities Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
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
                  <li key={index} className="text-center bg-yellow-400 p-2 border-4  border-white">
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
                  <li key={index} className="text-center  bg-yellow-400 p-2 border-4  border-white">
                    {item}
                  </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videogallery;
