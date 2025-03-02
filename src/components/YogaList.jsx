import { useEffect, useState } from "react";
import YogaPoseCard from "./YogaPoseCard";
import axios from "axios";

const YogaList = ({toggleAsanas}) => {
  const [yogaPoses, setYogaPoses] = useState([]);

  async function fetchAsanas() {
    try {
      let res = await axios.get(
        "https://shaktimudra-9aa9f-default-rtdb.asia-southeast1.firebasedatabase.app/yogaAsanas.json"
      );
      setYogaPoses(Object.entries(res.data || []));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAsanas();
  }, []);

  return (
    <div className="min-h-screen p-6">
      {/* Back Button */}
      <button
        onClick={toggleAsanas}
        className="bg-amber-700 text-white px-4 py-2 rounded-lg shadow-md mb-4 hover:bg-amber-800 transition duration-200"
      >
        ← Back
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-amber-700 mb-8">
        Yoga Poses
      </h1>

      {/* Yoga Poses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {yogaPoses.map((pose, index) => (
          <YogaPoseCard key={index} pose={pose} />
        ))}
      </div>
    </div>
  );
};

export default YogaList;
