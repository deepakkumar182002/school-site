// src/components/ClassToppers.jsx


function ClassToppers() {
  const toppers = [
    { id: 1, name: "DHRUV BHATI", percent: "90.4%", image: "/students/dhruv_bhati_90_4.jpg" },
  { id: 2, name: "ANUSHKA RATHORE", percent: "96.2%", image: "/students/anushka_rathore_96_2.jpg" },
  { id: 3, name: "SHUBHANGI SINGH TOMAR", percent: "92.2%", image: "/students/shubhangi_singh_tomar_92_2.jpeg" },
  { id: 4, name: "ANUSHKA BHARDWAJ", percent: "90%", image: "/students/anushka_bhardwaj_90.jpg" },
  { id: 5, name: "KUNAL RATHORE", percent: "96%", image: "/students/kunal_rathore_96.jpg" },
  { id: 6, name: "RAKSHIT CHAUDHARY", percent: "92.8%", image: "/students/rakshit_chaudhary_92_8.jpg" },
  { id: 7, name: "VIPUL KUMAR GAUTAM", percent: "90.6%", image: "/students/vipul_kumar_gautam_90_6.jpg" },
  ];

  return (
    <div className="w-full bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-red-500 mb-4 text-center">
        Toppers: Class X (Session 2023–2024)
      </h2>

      <div  className="overflow-hidden relative w-full">
        <ul id="scroll" className="flex space-x-6 mt-8 px-4 overflow-x-auto">
          {toppers.map((student) => (
            <li
              key={student.id}
              className="bg-white p-4 rounded-lg animate-scroll-horizontal shadow-md min-w-[220px] flex items-center gap-4"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-14 h-14 rounded-full  object-cover border border-gray-300"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  #{student.id} {student.name}
                </p>
                <p className="text-sm text-gray-500">({student.percent})</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassToppers;
