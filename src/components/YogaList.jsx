import React from "react";
import YogaPoseCard from "./YogaPoseCard";

const yogaPoses = [
  {
    englishName: "Wild Thing Pose",
    sanskritName: "Camatkarasana",
    description: "A dynamic backbend that opens the chest, stretches the hip flexors, and strengthens the shoulders.",
    benefit: "Opens the chest, stretches the hip flexors and psoas, and strengthens the shoulders and upper back muscles.",
    mainFocus: ["Chest Opening", "Hip Flexor Stretch", "Shoulder Strength", "Upper Back Activation"],
    keys: [
      "Bottom arm’s wrist and shoulder aligned",
      "Feet pressing firmly",
      "Engage buttock muscles",
      "Hips pushing up",
      "Extended arm reaching back toward the floor",
      "Gaze toward the thumb"
    ],
    howToDo: [
      "Start in Side Plank Pose with your weight on one hand.",
      "Step your top foot back and lower your toes to the floor behind you.",
      "Press into your supporting hand and lift your hips toward the ceiling.",
      "Extend your free arm back and let your chest open."
    ],
    tip: "Keep your supporting arm strong and engaged to avoid strain on the wrist and shoulder.",
    cautions: [
      "Mind the lower back compression.",
      "Avoid if you have ankle, wrist, elbow, shoulder, or neck injuries.",
      "Not recommended for individuals with high or low blood pressure."
    ],
    level: "Intermediate",
    type: "Back-Bend",
    quality: "Energizing"
  }
];

const YogaList = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {yogaPoses.map((pose, index) => (
          <YogaPoseCard key={index} pose={pose} />
        ))}
    </div>
    </>
  );
};

export default YogaList;
