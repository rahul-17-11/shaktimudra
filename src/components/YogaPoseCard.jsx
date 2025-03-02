import React from "react";

const YogaPoseCard = ({ pose }) => {
  const poseData = pose[1] || {};

  return (
    <div className="max-w-sm w-full bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 text-black relative">
      {/* Pose Name */}
      <h2 className="text-2xl font-bold text-black mb-1">
        {poseData.englishName || "Unknown Pose"}
      </h2>
      <h3 className="text-lg text-gray-700 italic mb-4">
        {poseData.sanskritName || "No Sanskrit Name"}
      </h3>

      {/* Level and Type Badges */}
      <div className="flex gap-2 mb-4">
        {poseData.level && (
          <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
            {poseData.level}
          </span>
        )}
        {poseData.type && (
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
            {poseData.type}
          </span>
        )}
      </div>

      {/* Description */}
      {poseData.description && (
        <p className="text-black text-sm mb-4">{poseData.description}</p>
      )}

      {/* Main Focus */}
      {poseData.mainFocus?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold text-black mb-2">Main Focus:</h4>
          <div className="flex flex-wrap gap-2">
            {poseData.mainFocus.map((focus, index) => (
              <span
                key={index}
                className="bg-gray-200 text-black text-xs font-medium px-3 py-1 rounded-full"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Keys to Alignment */}
      {poseData.keys?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold text-black mb-2">Keys to Alignment:</h4>
          <ul className="list-disc list-inside text-black text-sm">
            {poseData.keys.map((key, index) => (
              <li key={index}>{key}</li>
            ))}
          </ul>
        </div>
      )}

      {/* How to Do */}
      {poseData.howToDo?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold text-black mb-2">How to Do:</h4>
          <ol className="list-decimal list-inside text-black text-sm">
            {poseData.howToDo.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Tip */}
      {poseData.tip && (
        <div className="mb-4">
          <h4 className="text-md font-semibold text-black mb-2">Tip:</h4>
          <p className="text-black text-sm">{poseData.tip}</p>
        </div>
      )}

      {/* Cautions */}
      {poseData.cautions?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-md font-semibold text-black mb-2">Cautions:</h4>
          <ul className="list-disc list-inside text-red-800 text-sm">
            {poseData.cautions.map((caution, index) => (
              <li key={index}>{caution}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Extra Info */}
      <div className="flex justify-between text-sm text-black-400 mt-4 text-black">
        <span>
          Quality: <span className="text-black">{poseData.quality || "N/A"}</span>
        </span>
      </div>
    </div>
  );
};

export default YogaPoseCard;
