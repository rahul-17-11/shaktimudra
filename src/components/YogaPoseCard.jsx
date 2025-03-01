import React from "react";
import { useFirebase } from "../context/Firebase";

const YogaPoseCard = ({ pose }) => {
  const firebase = useFirebase()
  console.log(firebase.database)
  return (
    <div className="max-w-lg w-full bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 text-black-100">
      {/* Pose Name */}
      <h2 className="text-3xl font-bold text-black mb-2">{pose.englishName}</h2>
      <h3 className="text-lg text-green-700 italic mb-4">{pose.sanskritName}</h3>

      {/* Description */}
      <p className="text-black mb-4">{pose.description}</p>

      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">Benefits</h4>
        <p className="text-black">{pose.benefit}</p>
      </div>

      {/* Main Focus */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">Main Focus</h4>
        <ul className="list-disc list-inside text-black">
          {pose.mainFocus.map((focus, index) => (
            <li key={index}>{focus}</li>
          ))}
        </ul>
      </div>

      {/* Keys to Alignment */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">Keys to Alignment</h4>
        <ul className="list-disc list-inside text-black">
          {pose.keys.map((key, index) => (
            <li key={index}>{key}</li>
          ))}
        </ul>
      </div>

      {/* How to Do */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">How to Do</h4>
        <ol className="list-decimal list-inside text-black">
          {pose.howToDo.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Tip */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">Tip</h4>
        <p className="text-black">{pose.tip}</p>
      </div>

      {/* Cautions */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-black mb-1">Cautions</h4>
        <ul className="list-disc list-inside text-red-800">
          {pose.cautions.map((caution, index) => (
            <li key={index}>{caution}</li>
          ))}
        </ul>
      </div>

      {/* Extra Info */}
      <div className="flex justify-between text-sm text-black-400 mt-4">
        <span>Level: <span className="text-black">{pose.level}</span></span>
        <span>Type: <span className="text-black">{pose.type}</span></span>
        <span>Quality: <span className="text-black">{pose.quality}</span></span>
      </div>
    </div>
  );
};

export default YogaPoseCard;
