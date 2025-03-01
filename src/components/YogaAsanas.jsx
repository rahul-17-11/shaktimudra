import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { v4 as uuidv4 } from "uuid";

const yogaAsanas = [
  {
  englishName: "Boat Pose",
  sanskritName: "Navasana",
  benefit: "Boat Pose creates core, back, hip flexor strengthening, hamstring stretching and tones abdominal organs. Also improves balance and confidence.",
  keys: [
    "Core engaged",
    "Inner thigh squeezed",
    "Shoulder out",
    "Chest open",
    "Back straight",
    "Crown toward the ceiling",
    "Mind the neck and the lower back"
  ],
  cautions: ["Mind the neck and the lower back"],
  level: "Intermediate",
  type: "Seated",
  quality: "Energizing"
},
  {
  englishName: "Bound Angle Pose",
  sanskritName: "Baddha Konasana",
  benefit: "Bound Angle Pose improves hips and ankles flexibility, tones the leg muscles and strengthens the back. Stretches the groin and the inner legs. Main: Hip Opener ++, Back Strength, Leg Flexibility.",
  keys: [
    "Press the sole of the feet together",
    "Mind the sitting bones and the inner thighs",
    "Lengthen the spine",
    "Relax the shoulders",
    "If there is discomfort in the knees, allow them to stay slightly up or sit on a block"
  ],
  howToDo: [
    "Sit on the floor with your legs straight in front.",
    "Bend your knees and bring the soles of your feet together, allowing your knees to drop toward the floor.",
    "Hold your feet or ankles, and gently press your knees down.",
    "Tip: Use blocks under your knees for support if your inner thighs are tight."
  ],
  cautions: ["Ankle, knees, groin, or hip injuries or inflammation"],
  level: "Beginner",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Bound Side Angle Pose",
  sanskritName: "Baddha Parsvakonasana",
  benefit: "Bound Side Angle Pose stretches and strengthens the entire body. Chest opener, tones the lower body. Helps in correcting hyperkyphosis.",
  keys: [
    "Feet press",
    "Legs engaged",
    "Shoulders and chest open",
    "Front knee above the heel",
    "Gaze up"
  ],
  cautions: ["Mind the knees, hips, and shoulders"],
  level: "Intermediate",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Bow Pose",
  sanskritName: "Dhanurasana",
  benefit: "Bow Pose stretches the spine, neck, shoulders, torso, abdomen and quadriceps while strengthening the core, hamstrings and gluteal muscles. Massage of the abdominal organs. Core, Back Strength, Chest opening, Improving digestion.",
  keys: [
    "Cervical spine lengthened",
    "Lift the chest and legs up",
    "Push the ankles against the palms"
  ],
  cautions: [
    "Neck, shoulders, or back injuries"
  ],
  level: "Intermediate",
  type: "Back-bend",
  quality: "Energizing"
},
  {
  englishName: "Bridge Pose",
  sanskritName: "Sethu Bandha Sarvangasana",
  benefit: "Bridge Pose relieves back pain, improves blood circulation, and calms the mind and the nervous system. Back, Legs, and Shoulders Strength, Chest Opener, Spine Flexibility.",
  keys: [
    "Feet press",
    "Knees directly above the ankles",
    "Lift from the hips",
    "Chest toward the chin",
    "Arms support and scapula toward each other",
    "Mind the neck"
  ],
  howToDo: [
    "Lie on your back with your knees bent and feet on the floor.",
    "Tuck your tailbone and engage your core.",
    "Inhale then lift your hips while pressing into your feet.",
    "Tip: Engage your glutes and keep your knees hip-width apart."
  ],
  cautions: [
    "Any neck, shoulders, or back injuries"
  ],
  level: "Beginner",
  type: "Back-bend",
  quality: "Calming"
},
  {
  englishName: "Camel Pose",
  sanskritName: "Ustrasana",
  benefit: "Camel Pose improves breathing and releases tension in the anterior body from the knee to the chin. Improves the digestive and reproductive system. Spine Flexibility, Hip and Chest Opener, Arms and Thighs Strength.",
  keys: [
    "Hips directly above knees",
    "Shoulders away from the ears",
    "Chest open",
    "Mind the lower back"
  ],
  cautions: [
    "Spine, shoulders, or neck injuries",
    "Blood pressure issues"
  ],
  level: "Intermediate",
  type: "Back-bend",
  quality: "Energizing"
},
  {
  englishName: "Cat Pose",
  sanskritName: "Marjariasana",
  benefit: "Cat Pose gently stretches and warms up the spine, hips, shoulders, and neck. Improves mobility and stability of the body joints. Awakens the body and mind awareness. Stimulates the abdominal organs.",
  keys: [
    "Pull the shoulder blades away from each other",
    "Push the floor away with your hands and knees",
    "Keep your body weight centered",
    "Spine rounded"
  ],
  howToDoIt: [
    "From Cow Pose, exhale and round your spine",
    "Tuck your chin toward your chest",
    "Tip: Alternate between Cat Pose and Cow Pose for a gentle spinal warm-up"
  ],
  cautions: [
    "Wrist, shoulders, or neck injuries"
  ],
  level: "Beginner",
  type: "Preparatory",
  quality: "Grounding"
},
  {
  englishName: "Chair Pose",
  sanskritName: "Utkatasana",
  benefit: "Chair Pose improves posture, tones the nervous system, reinforces the legs, glutes, and abdominal muscles. Stimulates the heart and diaphragm. Main: Overall body stretch/strengthening, energizing.",
  keys: [
    "Feet press",
    "Knees above heels",
    "Tailbone tucked in",
    "Arms along the ears",
    "Palms together in the full pose"
  ],
  howToDoIt: [
    "Stand with your feet hip-width apart",
    "Inhale and bend your knees, lowering your hips as if sitting in a chair",
    "Raise your arms overhead",
    "Tip: Keep your weight in your heels to avoid knee strain"
  ],
  cautions: [
    "Ankles, knee, or back injury",
    "Arthritis",
    "Low blood pressure"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Child Pose",
  sanskritName: "Balasana",
  benefit: "Child Pose massages the abdominal internal organs, gently stretches the spine, hips, and thighs, calms the nervous system, and relieves tiredness.",
  keys: [
    "Big toes together",
    "Sitting on the heels",
    "Knees open",
    "Spine round",
    "Belly between thighs",
    "Forehead on the floor",
    "Shoulders relaxed"
  ],
  howToDoIt: [
    "Kneel on the floor with your knees wide apart",
    "Take a seat on your heels and extend your arms forward",
    "Tip: This is a resting pose. Use it whenever you need a break"
  ],
  cautions: [
    "Hip, ankle, or knee injury",
    "Do not strain the neck"
  ],
  level: "Beginner",
  type: "Restorative",
  quality: "Calming"
},
  {
  englishName: "Cobra Pose",
  sanskritName: "Bhujangasana",
  benefit: "Cobra Pose keeps the spine supple and healthy. Strengthens the back and opens the chest, encouraging a deeper breath. Promotes digestion. Back Strength, Chest Opening, Spine Elongation.",
  keys: [
    "Legs active",
    "Chest forward then up",
    "Beware of back compression",
    "Hips on the floor",
    "Shoulders back and down",
    "Allow to slightly bend the elbows"
  ],
  cautions: [
    "Neck, shoulders, or spine injuries"
  ],
  level: "Intermediate",
  type: "Back-bend",
  quality: "Energizing"
},
  {
  englishName: "Compass Pose",
  sanskritName: "Surya Yantrasana",
  benefit: "Compass Pose stretches the calves, hamstrings, and psoas, improves shoulder and hip flexibility, tones the arms, spine, and abdominal organs. Also improves spine health and digestion.",
  keys: [
    "Press firmly the palm on the floor to activate the bottom arm",
    "Let the hip open and extend the leg up till the tip toes",
    "Open the chest to the opposite direction"
  ],
  cautions: [
    "Mind the shoulders, wrists, and the elbow of the bottom arm"
  ],
  level: "Intermediate",
  type: "Seated",
  quality: "Energizing"
},
  {
  englishName: "Corpse Pose",
  sanskritName: "Shavasana",
  benefit: "Corpse Pose relaxes the psychophysiological system. Develops body awareness leading to pratyahara, allowing the body to rest and integrate all the benefits of the asanas.",
  keys: [
    "Feet slightly apart, hands about 15cm from the hips",
    "Whole body relaxed, palms facing up, eyes closed"
  ],
  howToDoIt: [
    "Lie on your back with your arms relaxed by your sides",
    "Close your eyes and let gravity relax your body"
  ],
  tip: "Focus on your breath and let go of any tension.",
  cautions: [
    "For lower back or hips issues, use a pillow under the knees"
  ],
  level: "Beginner",
  type: "Restorative",
  quality: "Calming"
},
  {
  englishName: "Cow Face Pose",
  sanskritName: "Gomukhasana",
  benefit: "Cow Face Pose greatly improves hips, quadriceps, and shoulder flexibility while toning the abdominal organs. Relieves tiredness, sciatica, and leg cramps. Excellent for relaxation.",
  keys: [
    "Hips between the feet, knees in the same line",
    "Spine elongated, chest open",
    "Elbows in line with the shoulders",
    "Keep the lower leg straight if there is any discomfort in the knees"
  ],
  cautions: [
    "Wrist, elbows, shoulders, neck, hips, or quadriceps injuries"
  ],
  level: "Intermediate",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Cow Pose",
  sanskritName: "Bitilasana",
  benefit: "Cow Pose gently stretches and warms up the spine, hips, shoulders, and neck, especially the front body. Improves mobility and stability of the body joints. Awakens the body and develops awareness.",
  keys: [
    "Pull the shoulders away from the ears",
    "Mind spine compression",
    "Stay grounded",
    "Keep the body weight centered"
  ],
  howToDoIt: [
    "From Table Pose, inhale and lift your tailbone toward the ceiling.",
    "Drop your belly and look up."
  ],
  tip: "Coordinate your breath with your movement.",
  cautions: [
    "Wrist, shoulders, neck, or back injuries"
  ],
  level: "Beginner",
  type: "Preparatory",
  quality: "Grounding"
},
  {
  englishName: "Crane Pose",
  sanskritName: "Bakasana",
  benefit: "Crane Pose strengthens the arms, wrists, elbows, shoulders and tones the abdominal muscles. Improves concentration, balance, and promotes confidence.",
  keys: [
    "Look slightly forward",
    "Knees under the armpits",
    "Body weight forward and up",
    "Tailbone upward",
    "Core engaged",
    "Elbows above wrists",
    "Avoid pressing the knees on the elbows"
  ],
  cautions: [
    "Wrists, elbows, or shoulder injuries"
  ],
  level: "Intermediate",
  type: "Arm-Balance",
  quality: "Balancing"
},
  {
  englishName: "Diamond Pose",
  sanskritName: "Vajrasana",
  benefit: "Diamond Pose increases entire digestive system efficiency, strengthens pelvic muscles, alleviates menstrual disorders, and helps in hernia prevention. Stretches ankles, knees, and quadriceps muscles.",
  keys: [
    "Big toes together",
    "Heels touching the side of the hips",
    "Spine long",
    "Palms on or above the knees",
    "Do not over twist the ankles",
    "Mind the knees",
    "Don't arch the lower back"
  ],
  howToDo: [
    "Kneel with your knees together and feet slightly apart.",
    "Maintain a straight spine by reclining on your heels.",
    "Rest your hands on your thighs."
  ],
  tip: "Practice this pose after eating to aid digestion.",
  cautions: ["Knees or ankle injuries"],
  level: "Beginner",
  type: "Seated",
  quality: "Calming"
},
  {
  englishName: "Downward Facing Dog",
  sanskritName: "Adho Mukha Svanasana",
  benefit: "Downward Facing Dog creates extension of the entire spine and calms the nervous system. This pose easily fits into any sequence as it is both a resting pose and a great transition pose. Provides an all-over stretch, strengthens arms, legs, and core, and improves digestion.",
  keys: [
    "Palms actively pressing on the mat",
    "Keep a natural spine alignment",
    "Rotate the shoulders outward",
    "Hips up",
    "Knee cap pull",
    "Feet parallel",
    "Heels slightly opened out"
  ],
  howToDo: [
    "Begin by positioning yourself on your hands and knees.",
    "Lift your hips toward the ceiling, forming an inverted V shape."
  ],
  tip: "Press your heels toward the floor for a deeper stretch.",
  cautions: ["High blood pressure"],
  level: "Beginner",
  type: "Inversion",
  quality: "Grounding"
},
  {
  englishName: "Eagle Pose",
  sanskritName: "Garudasana",
  benefit: "Eagle Pose improves concentration, calms the mind, stimulates blood circulation, and strengthens the immune system. Enhances balance, strengthens legs, wrists, and ankles, and stretches the shoulders and upper back.",
  keys: [
    "Arms, legs, and core engaged",
    "Shoulder blades spread apart",
    "Arms reaching up and elbows away from the chest",
    "Allow gently placing toes down if unable to wrap the ankle around the leg"
  ],
  cautions: [
    "Wrists, elbows, ankles, knees, shoulders, and hips injuries"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Easy Pose",
  sanskritName: "Sukhasana",
  benefit: "Easy Pose greatly improves hip joint rotation, strengthens the legs, upper back, and shoulders. Calms the mind and is excellent for centering. Main benefits: Hip Opener, Straightened Back, Calmness.",
  keys: [
    "Mind the sit bones",
    "Lengthen the spine",
    "Shoulders relaxed",
    "Chin slightly down",
    "Back of the neck elongated",
    "If there is discomfort in the knees, allow keeping the knees slightly up or sit on a block"
  ],
  howToDo: [
    "Sit cross-legged on the floor, with your spine as straight as possible.",
    "Rest your hands on your knees, palms facing upward.",
    "Focus on your breath."
  ],
  tip: "Use a cushion or folded blanket under your hips if you find it challenging at first to keep your spine straight.",
  cautions: ["Knee or ankle injuries", "Sciatica"],
  level: "Beginner",
  type: "Seated",
  quality: "Calming"
},
  {
  englishName: "Eight Limbed Salutation",
  sanskritName: "Ashtanga Namaskara",
  benefit: "Eight Limbed Salutation provides overall stretching and strength to muscles and joints. Improves stability, flexibility, and mobility of the back and spine. Helps to build stability of the mind and confidence.",
  keys: [
    "Mind spine and shoulders compression",
    "Keep the elbows close to the chest",
    "The bra line should be past the thumbs"
  ],
  cautions: [
    "Herniated discs",
    "Lower back pain",
    "Arthritis",
    "Migraine",
    "Pregnancy"
  ],
  level: "Intermediate",
  type: "Arm-Balance",
  quality: "Balancing"
},
  {
  englishName: "Equestrian Pose",
  sanskritName: "Ashwa Sanchalanasana",
  benefit: "Equestrian Pose stretches your back muscles, quadriceps, legs, hips, and groin. Improves the functioning of the liver and kidneys. Increases willpower and determination.",
  keys: [
    "The front knee should be directly above the ankle",
    "Tailbone tucked in",
    "Core and legs engaged",
    "Hips facing forward"
  ],
  howToDoIt: [
    "Start in a low lunge with your hands on the floor",
    "Lift your chest and gaze forward",
    "Tip: Keep your back leg straight for a deeper stretch"
  ],
  cautions: [
    "Knees, ankles, or hips injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Extended Hand To Big Toe A",
  sanskritName: "Utthita Hasta Padangusthasana A",
  benefit: "Extended Hand To Big Toe A stretches and brings flexibility to the hips and the hamstrings, strengthens legs and ankles. Promotes confidence and improves balance.",
  mainFocus: ["Balance", "Focus", "Leg Strength"],
  keys: [
    "Floor leg engaged",
    "Spine elongated",
    "Hips and shoulders on the same level",
    "Foot, hip, and shoulder on the same line"
  ],
  cautions: [
    "Knees, ankles, or hips injuries"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Extended Hand To Big Toe B",
  sanskritName: "Utthita Hasta Padangusthasana B",
  benefit: "Extended Hand To Big Toe B improves confidence and concentration. Stretches and strengthens the legs while promoting balance.",
  mainFocus: ["Leg Stretching", "Hip Opening", "Balance"],
  keys: [
    "Floor leg engaged",
    "Spine elongated",
    "Hips and shoulders opened on the same level",
    "Foot, hip, and shoulder in one line"
  ],
  cautions: [
    "Knees, ankles, or hips injuries"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Extended Side Angle Pose",
  sanskritName: "Utthita Parsvakonasana",
  benefit: "Extended Side Angle Pose stretches the side abdominal muscles and strengthens the legs, shoulders, wrists, and ankles. It provides an overall full-body stretch and develops stamina.",
  mainFocus: ["Full Body Stretch", "Stamina Development"],
  keys: [
    "Feet press",
    "Front knee directly above ankle",
    "Chest open",
    "Back-foot ankle, hip, and wrist in line",
    "Mind the neck, shoulders away from the ear",
    "Keep the back leg engaged"
  ],
  howToDo: [
    "From Warrior 2, lower your right hand to the floor or a block.",
    "Extend your left arm over your ear, creating a straight line.",
    "Tip: Keep your chest open and avoid collapsing into your lower side."
  ],
  cautions: [
    "Ankles, hips, shoulders, or neck injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Fish Pose",
  sanskritName: "Matsyasana",
  benefit: "Matsyasana opens the shoulders and chest, improving lung capacity. It releases muscular tension in the neck and shoulders and is often used as a counter pose for Sarvangasana. It promotes chest opening, spine lengthening, and back strengthening.",
  mainFocus: ["Chest Opening", "Spine Lengthening", "Back Strengthening"],
  keys: [
    "Legs and feet active",
    "Hips pressed on the floor",
    "Chest lifting up",
    "Scapula toward each other",
    "Top of the head on the floor",
    "Elbows bent",
    "Mind the neck"
  ],
  howToDo: [
    "Lie on your back with your legs extended and arms relaxed.",
    "Press your forearms and elbows into the floor, lifting your chest.",
    "Let the crown of your head rest on the floor.",
    "Tip: Avoid putting excessive weight on your head to protect your neck."
  ],
  cautions: [
    "Neck injuries", 
    "Migraines", 
    "Blood pressure issues"
  ],
  level: "Intermediate",
  type: "Back-bend",
  quality: "Calming"
},
  {
  englishName: "Four-Limbed Staff Pose",
  sanskritName: "Chaturanga Dandasana",
  benefit: "Chaturanga helps maintain focus and improves concentration. It enhances control over scapular movements and strengthens the arms, wrists, shoulders, spine, and core.",
  mainFocus: ["Arm Strength", "Core Engagement", "Shoulder Stability"],
  keys: [
    "Legs and core engaged",
    "Don't collapse on the shoulders and hips",
    "Shoulders in line with elbows",
    "Heels, hips, shoulders, and neck in one line"
  ],
  howToDo: [
    "Start in a high plank position.",
    "Lower your body until your elbows are at a 90-degree angle, keeping them close to your ribs.",
    "Engage your core and keep your body in a straight line.",
    "Tip: Avoid dipping your hips or shoulders too low to maintain proper alignment."
  ],
  cautions: [
    "Wrist injuries", 
    "Elbow injuries", 
    "Shoulder injuries"
  ],
  level: "Intermediate",
  type: "Arm-balance",
  quality: "Balancing"
},
  {
  englishName: "Garland Pose",
  sanskritName: "Malasana",
  benefit: "Garland Pose strengthens the knees and hips while improving flexibility in the back muscles. It opens the hips, shoulders, and chest, supports the reproductive system, and helps relieve menstrual pain.",
  mainFocus: ["Hip Opener", "Knee Strength", "Spinal Flexibility"],
  keys: [
    "Keep the spine elongated",
    "Shoulders open",
    "Tailbone pointing down"
  ],
  howToDo: [
    "Stand with your feet wider than your hips.",
    "Squat down, bringing your hands together at your chest.",
    "Tip: Keep your heels on the floor for stability."
  ],
  cautions: [
    "Ankles injuries", 
    "Knee injuries", 
    "Hips injuries", 
    "Weak lower back"
  ],
  level: "Beginner",
  type: "Preparatory",
  quality: "Calming"
},
  {
  englishName: "Half Bound Lotus Standing Forward Bend",
  sanskritName: "Ardha Baddha Padmottanasana",
  benefit: "This pose stimulates digestion, improves blood circulation, and enhances balance. It stretches the calves, hamstrings, back, and increases ankle and hip flexibility.",
  mainFocus: ["Balance", "Flexibility", "Hamstring & Hip Stretch"],
  keys: [
    "Bottom leg straight",
    "Hips at the same level",
    "Long spine",
    "Body weight forward",
    "Palms press"
  ],
  howToDo: [
    "Stand tall and lift your right foot, placing it on your left thigh in a lotus position.",
    "Reach your right hand behind your back to grab your right big toe.",
    "Hinge forward from the hips, reaching your left hand toward the ground.",
    "Tip: If necessary, maintain a slight bend in the standing knee or keep both hands on the floor."
  ],
  cautions: [
    "Blood pressure issues",
    "Knee injuries",
    "Hip injuries"
  ],
  level: "Advanced",
  type: "Forward-Bend",
  quality: "Balancing"
},
  {
  englishName: "Half Headstand Pose",
  sanskritName: "Urdhva Dandasana",
  benefit: "This pose strengthens the arms, shoulders, back muscles, and legs. It stimulates the heart and diaphragm, builds awareness, decompresses the spine, and activates the crown chakra.",
  mainFocus: ["Strength", "Balance", "Spinal Decompression", "Inversion"],
  keys: [
    "Use lower arms and shoulder muscles to push the floor away",
    "Hips above shoulders",
    "Heels in line with hips",
    "Core and inner thighs engaged",
    "Use a wall if necessary until you build strength and balance",
    "Preferably learn with a competent teacher"
  ],
  howToDo: [
    "Start in Salamba Sirsasana.",
    "Exhale, engage your core, and lower your legs until they are parallel to the floor.",
    "Hold the position and maintain core engagement.",
    "Tip: Keep your shoulders active to protect your neck."
  ],
  cautions: [
    "Cervical spine issues",
    "Neck injuries",
    "Shoulder injuries",
    "Wrist, elbow, or spine injuries"
  ],
  level: "Advanced",
  type: "Inversion",
  quality: "Balancing"
},
  {
  englishName: "Half Lotus Tree Pose",
  sanskritName: "Ardha Padma Vrksasana",
  benefit: "Improves blood circulation, stretches calves and hamstrings, increases ankle and hip flexibility, and enhances balance.",
  mainFocus: ["Balance", "Flexibility", "Leg Strength", "Hip Opening"],
  keys: [
    "Keep the bottom leg straight",
    "Hips should be at the same level",
    "Maintain a long spine",
    "Bend knee toward the floor",
    "Engage inner thighs"
  ],
  cautions: [
    "Knee injuries",
    "Ankle injuries",
    "Hip injuries"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Half Moon Pose",
  sanskritName: "Ardha Chandrasana",
  benefit: "Stretches shoulders, spine, legs, and hips. Improves balance and strengthens the entire body while opening the chest.",
  mainFocus: ["Balance", "Strength", "Chest Opening", "Hip Flexibility"],
  keys: [
    "Engage the whole body",
    "Keep both hips above the heel",
    "Open the hips and chest",
    "Spread shoulder blades apart",
    "Align arms in one line",
    "Lift the trunk upward to lighten the pose"
  ],
  cautions: [
    "Sciatica",
    "Extreme low blood pressure",
    "Ankle, knee, or hip injuries"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Half Pigeon Pose",
  sanskritName: "Ardha Kapotasana",
  benefit: "Opens the hips, improves spine flexibility, strengthens the core and back muscles, relieves fatigue, and calms the mind.",
  mainFocus: ["Hip Opening", "Spine Flexibility", "Core Strength", "Relaxation"],
  keys: [
    "Keep hips at the same level",
    "Avoid twisting the spine",
    "Keep the chest facing forward",
    "Try not to lean to the side"
  ],
  cautions: [
    "Ankle injuries",
    "Hip injuries",
    "Back injuries",
    "Knee injuries"
  ],
  level: "Intermediate",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Half Spinal Twist",
  sanskritName: "Ardha Matsyendrasana",
  benefit: "Tones the spinal nerves, improves blood circulation, and massages abdominal organs. Stretches the chest, hips, and lower back while promoting chest opening and circulation.",
  mainFocus: ["Spinal Flexibility", "Detoxification", "Chest Opening", "Hip Stretch"],
  keys: [
    "Press the sit bones firmly",
    "Keep the spine elongated",
    "Thigh pressing against the chest",
    "Relax the shoulders",
    "Gaze back gently"
  ],
  cautions: [
    "Hernia",
    "Spine injuries",
    "Irritable bowel syndrome"
  ],
  level: "Beginner",
  type: "Twist",
  quality: "Calming"
},
  {
  englishName: "Half Standing Forward Bend",
  sanskritName: "Ardha Uttanasana",
  benefit: "Corrects hyper kyphosis and tones abdominal muscles. Acts as a transition pose during flows. Helps in chest opening, strengthens the back, and stretches the hamstrings.",
  mainFocus: ["Chest Opening", "Back Strength", "Hamstring Stretch"],
  keys: [
    "Press feet firmly into the ground",
    "Keep legs active",
    "Maintain a straight and elongated back",
    "Tailbone pointing upward",
    "Avoid neck compression"
  ],
  cautions: [
    "Blood pressure issues",
    "Lower back injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Head To Knee Pose",
  sanskritName: "Janu Sirsasana",
  benefit: "Calms the brain, relieves anxiety and tiredness. Improves digestion. Prepares the legs for meditation poses. Stretches the hamstrings, calves, neck, and shoulders while lengthening the spine.",
  mainFocus: ["Hamstring Stretch", "Calves Stretch", "Neck & Shoulder Stretch", "Spine Lengthening"],
  keys: [
    "Keep the extended leg active",
    "Align hips properly",
    "Elongate the spine",
    "Belly onto the thigh",
    "Avoid forceful forward reaching"
  ],
  cautions: [
    "Sciatica",
    "Ankle, knee, or hip injuries",
    "Irritable Bowel Syndrome (IBS)"
  ],
  level: "Intermediate",
  type: "Forward-Bend",
  quality: "Calming"
},
  {
  englishName: "Headstand Pose",
  sanskritName: "Sirsasana",
  description: "Known as the king of all yoga poses, Headstand requires shoulder strength, core stability, and mental focus. It improves circulation and concentration.",
  benefit: "Strengthens arms, shoulders, back, and legs. Stimulates the heart and diaphragm. Decompresses the spine and activates the crown chakra.",
  mainFocus: ["Core Strength", "Balance", "Spine Decompression", "Circulation Boost"],
  keys: [
    "Use palms to push the floor and reduce pressure on the cervical spine",
    "Elbows aligned above wrists",
    "Engage core and legs for stability",
    "Practice near a wall if needed",
    "Learn under proper guidance"
  ],
  howToDo: [
    "Start on hands and knees, pressing palms firmly into the mat.",
    "Rest the crown of your head on the floor and walk your feet closer.",
    "Engage your core and lift your legs overhead.",
    "Keep legs straight and maintain balance."
  ],
  tip: "Use a wall for support if you're new to headstands.",
  cautions: [
    "Neck and back injuries",
    "High or low blood pressure",
    "Headaches or migraines"
  ],
  level: "Advanced",
  type: "Inversion",
  quality: "Energizing"
},
  {
  englishName: "Hero Pose",
  sanskritName: "Virasana",
  description: "A seated posture that provides a deep stretch for the quadriceps and ankles. Often used for pranayama and meditation, it promotes relaxation and better circulation in the legs.",
  benefit: "Stretches quadriceps and ankles. Improves posture, circulation, and mental calmness. Helps in preparing the body for meditation.",
  mainFocus: ["Relaxation", "Posture Improvement", "Leg Circulation", "Knee Rejuvenation"],
  keys: [
    "Sit between the feet with knees together",
    "Elongate the spine and relax the shoulders",
    "Avoid knee strain—extend one leg or use a block if needed"
  ],
  howToDo: [
    "Kneel on the floor with knees together and feet apart.",
    "Sit down between your feet, keeping your heels slightly apart.",
    "Rest your hands on your thighs and maintain an upright posture."
  ],
  tip: "Use a block or bolster under your hips if you feel discomfort in your knees.",
  cautions: ["Knee or ankle injuries"],
  level: "Beginner",
  type: "Seated",
  quality: "Calming"
},
  {
  englishName: "Heron Pose",
  sanskritName: "Krounchasana",
  description: "A seated pose that deeply stretches the ankles, calves, hamstrings, quadriceps, spine, and shoulders while stimulating the abdominal organs.",
  benefit: "Enhances core flexibility, strengthens hips and legs, and improves spinal alignment.",
  mainFocus: ["Core Flexibility", "Hip Strength", "Leg Strength"],
  keys: [
    "Both hips grounded on the floor",
    "Engage the extended leg and arms",
    "Keep the spine lengthened",
    "Be mindful of knee alignment"
  ],
  cautions: ["Sciatica", "Ankle, knee, or hip injuries"],
  level: "Intermediate",
  type: "Seated",
  quality: "Calming"
},
  {
  englishName: "High Lunge Pose",
  sanskritName: "Utthita Ashwa Sanchalanasana",
  description: "A standing pose that stretches and tones the entire body while enhancing stamina, confidence, and respiratory function.",
  benefit: "Develops stamina, improves circulation, and strengthens the legs and core.",
  mainFocus: ["Full-body Stretch", "Strength", "Balance"],
  keys: [
    "Front knee directly above the ankle",
    "Tailbone pointing down",
    "Core and legs engaged",
    "Hips facing forward"
  ],
  howToDo: [
    "Start in a low lunge with your right foot forward.",
    "Lift your back knee and raise your arms overhead, keeping hips squared.",
    "Engage your core for stability."
  ],
  cautions: ["Knee, ankle, or hip injuries"],
  level: "Beginner",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "King Pigeon Pose",
  sanskritName: "Eka Pada Rajakapotasana",
  description: "An advanced backbend that deeply opens the chest, shoulders, and hip flexors, requiring both flexibility and strength.",
  benefit: "Enhances body awareness, improves posture, strengthens the back and core, and increases hip flexibility.",
  mainFocus: ["Chest Opening", "Back Strength", "Hip Flexibility"],
  keys: [
    "Hips on the floor at the same level",
    "Mind the front knee and lower back",
    "Shoulders and chest opened",
    "Maintain a controlled back extension"
  ],
  howToDo: [
    "Start with the right leg at a 90-degree angle in front.",
    "Bend your back knee and reach your hands overhead, grabbing your back foot.",
    "Lift your chest and gaze upward while maintaining balance.",
    "Tip: Use a strap to help reach your foot if needed."
  ],
  cautions: ["Neck, back, hip, knee, or ankle injuries", "Shoulder dislocations"],
  level: "Advanced",
  type: "Back-Bend",
  quality: "Energizing"
},
  {
  englishName: "Locked Lotus Pose",
  sanskritName: "Baddha Padmasana",
  description: "A deep hip-opening pose that promotes relaxation and focus. It is a variation of the classic lotus position requiring flexibility and mindfulness.",
  benefit: "Relaxes the nervous system, stimulates digestion, alleviates shoulder, arm, and back pain, massages the abdominal organs, and stretches the back muscles.",
  mainFocus: ["Hip Flexibility", "Spinal Alignment", "Relaxation"],
  keys: [
    "Knees and buttocks on the ground",
    "Inner thighs engaged",
    "Spine elongated till the crown",
    "Scapula retracted"
  ],
  howToDo: [
    "Sit in a lotus pose, placing each foot on the opposite thigh.",
    "Reach both hands behind your back, aiming to grab your toes.",
    "Keep your chest lifted and breathe deeply.",
    "Tip: If you can't reach your toes, focus on maintaining a straight spine and steady breathing."
  ],
  cautions: ["Hip, knee, ankle, and shoulder injuries", "Avoid straining the neck"],
  level: "Advanced",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Lord of the Fishes Pose",
  sanskritName: "Matsyendrasana",
  description: "A seated spinal twist that enhances flexibility, stimulates digestion, and improves breathing capacity.",
  benefit: "Tones spinal nerves, improves spinal range of motion, stimulates abdominal organs, and enhances respiratory function.",
  mainFocus: ["Spinal Mobility", "Digestion", "Respiratory Function"],
  keys: [
    "Engage the twist from the thoracic spine",
    "Hips should face the front of the mat",
    "Keep the spine tall and elongated"
  ],
  howToDo: [
    "Sit with your right leg bent and your left leg crossed over.",
    "Twist to the left, placing your right elbow outside your left knee.",
    "Keep your gaze over your left shoulder.",
    "Tip: Maintain a long spine while twisting to avoid compression."
  ],
  cautions: [
    "Migraine",
    "High blood pressure",
    "Ankle, hip, knee, shoulder, or neck injuries"
  ],
  level: "Beginner",
  type: "Twist",
  quality: "Calming"
},
  {
  englishName: "Lord Shiva's Pose",
  sanskritName: "Natarajasana",
  description: "A graceful standing balance pose that strengthens the back, shoulders, and legs while improving focus and stability.",
  benefit: "Strengthens the back, shoulders, arms, hips, and legs. Enhances balance, concentration, and confidence.",
  mainFocus: ["Balance", "Strength", "Focus"],
  keys: [
    "Keep the bottom leg straight and strong",
    "Extend the upper leg back and up",
    "Square the hips while keeping the chest lifted",
    "Engage the arms and focus the gaze"
  ],
  howToDo: [
    "Stand tall and shift your weight onto your right foot.",
    "Bend your left knee and reach your left hand back to grasp your ankle.",
    "Extend your right arm forward while lifting your left leg behind you.",
    "Press your foot into your hand to deepen the stretch.",
    "Tip: Keep your gaze steady to maintain balance."
  ],
  cautions: [
    "Ankle injuries",
    "Shoulder injuries",
    "Spinal injuries",
    "Avoid lower back compression; keep hips square"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Balancing"
},
  {
  englishName: "Lotus Peacock Pose",
  sanskritName: "Padma Mayurasana",
  description: "An advanced arm balance that combines lotus pose with strength and stability, enhancing focus and digestion.",
  benefit: "Strengthens arms, shoulders, and back muscles. Improves balance, focus, digestion, and relieves constipation.",
  mainFocus: ["Arm Strength", "Core Stability", "Balance"],
  keys: [
    "Fingers pointing backward",
    "Elbows pressing on the lower abdomen",
    "Shoulders, hips, and knees aligned",
    "Gaze forward for balance"
  ],
  howToDo: [
    "Begin in a seated lotus pose.",
    "Place your hands on the floor in front of you, fingers pointing toward your body.",
    "Lean forward and shift your weight onto your arms.",
    "Engage your core and lift your legs off the ground, balancing on your hands.",
    "Tip: Keep your core engaged to maintain stability throughout the pose."
  ],
  cautions: [
    "Ankle injuries",
    "Knee injuries",
    "Hip injuries",
    "Avoid during pregnancy or with high blood pressure"
  ],
  level: "Advanced",
  type: "Arm Balance",
  quality: "Balancing"
},
  {
  englishName: "Lotus Pose",
  sanskritName: "Padmasana",
  description: "A classic seated pose for meditation and pranayama, providing stability and relaxation.",
  benefit: "Great for meditation and Pranayama practice. Promotes hip opening, relaxation, and improves posture.",
  mainFocus: ["Hip Flexibility", "Meditation", "Posture Stability"],
  keys: [
    "Feet resting on top of thighs",
    "Spine elongated",
    "Relax shoulders",
    "Top of the head reaching upward",
    "Chin slightly down"
  ],
  howToDo: [
    "Sit on the floor with legs extended.",
    "Bend one knee and place the foot on the opposite thigh.",
    "Bend the other knee and place the foot on the opposite thigh.",
    "Keep your spine straight and relax your shoulders.",
    "Tip: Ensure you have sufficient hip mobility before attempting full lotus."
  ],
  cautions: [
    "Knee pain or injuries",
    "Ankle injuries",
    "Calf discomfort"
  ],
  level: "Intermediate",
  type: "Seated",
  quality: "Calming"
},
 {
  englishName: "Lotus Shoulderstand Pose",
  sanskritName: "Padma Sarvangasana",
  description: "An advanced inversion combining the benefits of lotus pose and shoulder stand, enhancing balance, focus, and flexibility.",
  benefit: "Stretches the spine, neck, and shoulders. Strengthens the core and legs. Regulates metabolism and massages internal organs.",
  mainFocus: ["Spinal Stretch", "Core Strength", "Balance Improvement", "Circulation Boost"],
  keys: [
    "Lift from shoulders to tailbone to reduce chest compression",
    "Pelvis aligned above shoulders, heels above hips",
    "Neck remains long and relaxed"
  ],
  howToDo: [
    "Lie on your back and lift your legs into a lotus position.",
    "Press into your shoulders and lift your hips off the ground, supporting your back with your hands.",
    "Keep your pelvis above your shoulders and heels above your hips.",
    "Hold the pose and breathe deeply.",
    "Tip: Focus on keeping your neck relaxed and weight evenly distributed on your shoulders."
  ],
  cautions: [
    "High blood pressure",
    "Ankle, hip, knee, shoulder, or neck injuries"
  ],
  level: "Advanced",
  type: "Inversion",
  quality: "Calming"
},
   {
  englishName: "Monkey Pose",
  sanskritName: "Hanumanasana",
  description: "A deep hamstring stretch resembling the splits, testing flexibility, balance, and patience.",
  benefit: "Improves balance, stability, and hip flexibility. Tones, stretches, and strengthens leg muscles. Enhances grounding and balances the nervous system.",
  mainFocus: ["Hamstring Stretch", "Hip Flexibility", "Balance", "Leg Strength"],
  keys: [
    "Relax the shoulders and neck",
    "Center body weight evenly",
    "Keep hips square"
  ],
  howToDo: [
    "Start in a low lunge with your right foot forward and both hands on the floor.",
    "Gradually extend your right leg forward while sliding your left leg back.",
    "Keep your hips square and breathe deeply to allow your muscles to stretch.",
    "Tip: Use blocks under your hands if you need extra support."
  ],
  cautions: [
    "Tailbone, hip, pelvis, knee, or ankle injuries",
    "Pregnancy"
  ],
  level: "Advanced",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Mountain Pose",
  sanskritName: "Tadasana / Samasthiti",
  description: "A foundational standing pose that improves posture, balance, and body awareness.",
  benefit: "Improves posture and strengthens core muscles. Enhances calmness, centering, and grounding.",
  mainFocus: ["Posture", "Core Strength", "Balance", "Grounding"],
  keys: [
    "Feet press evenly",
    "Legs engaged",
    "Elongate the spine",
    "Top of the head toward the ceiling",
    "Shoulders down and relaxed",
    "Palms facing forward",
    "Lengthen breath"
  ],
  howToDo: [
    "Stand with your big toes touching and heels slightly apart.",
    "Press down into all four corners of your feet.",
    "Lengthen your spine and lift your chest.",
    "Tip: This serves as the basis for numerous standing poses. Focus on your breath to stay balanced."
  ],
  cautions: [
    "Falls are not uncommon when trying to practice Tadasana with eyes closed."
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Grounding"
},
  {
  englishName: "Plank Pose",
  sanskritName: "Kumbhakasana",
  description: "A foundational arm-balancing pose that strengthens the core, shoulders, and arms while improving concentration.",
  benefit: "Improves focus and concentration. Tones the core, legs, shoulders, and arms. Enhances posture and overall strength.",
  mainFocus: ["Core Strength", "Arm Stability", "Posture", "Balance"],
  keys: [
    "Legs and core engaged",
    "Heels, hips, and shoulders in a straight line",
    "Shoulder blades spread apart",
    "Elongate the back of the neck",
    "Avoid collapsing the hips"
  ],
  howToDo: [
    "Start on your hands and knees, then extend your legs back.",
    "Maintain a straight body alignment from your head to your heels.",
    "Tip: Engage your core and avoid sagging your hips."
  ],
  cautions: [
    "Wrists, elbows, or shoulder injuries."
  ],
  level: "Beginner",
  type: "Arm-balance",
  quality: "Balancing"
},
  {
  englishName: "Plow Pose",
  sanskritName: "Halasana",
  description: "A rejuvenating inversion that enhances circulation, stretches the back, and stimulates the thyroid gland.",
  benefit: "Improves blood circulation to the heart, lungs, and brain. Stimulates reproductive organs and thyroid activity. Strengthens the abdominal muscles and stretches the back and hamstrings.",
  mainFocus: ["Spinal Flexibility", "Circulation", "Thyroid Stimulation", "Core Strength"],
  keys: [
    "Hips and shoulders in the same line",
    "Core engaged",
    "Arms and shoulders provide support",
    "Mind the neck"
  ],
  howToDo: [
    "Lie on your back and lift your legs overhead, reaching toward the floor behind you.",
    "Keep your hands supporting your back or extend them on the floor for stability.",
    "Tip: Avoid putting excessive pressure on the neck. Keep your breath steady."
  ],
  cautions: [
    "Neck or shoulder injuries",
    "Scoliosis",
    "Glaucoma",
    "High blood pressure"
  ],
  level: "Intermediate",
  type: "Inversion",
  quality: "Calming"
},
  {
  englishName: "Pyramid Pose",
  sanskritName: "Parsvottanasana",
  description: "A deep forward bend that strengthens the legs, stretches the hamstrings, and promotes balance and focus.",
  benefit: "Develops stamina and deeply tones the legs. Improves flexibility in the hamstrings, hips, and spine. Helps relax the mind and bring balance to daily life.",
  mainFocus: ["Leg Strength", "Hamstring Flexibility", "Spinal Lengthening", "Mental Focus"],
  keys: [
    "Hips at the same level",
    "Feet pressing firmly into the floor",
    "Legs active",
    "Long spine, crown reaching toward the front foot",
    "Avoid straining the shoulders and neck",
    "Use blocks under palms for blood pressure or lower back pain"
  ],
  howToDo: [
    "Start in a standing position with one foot forward and the other foot back.",
    "Square your hips and fold forward over the front leg, keeping your spine long.",
    "Tip: Use yoga blocks under your hands for support if flexibility is limited."
  ],
  cautions: [
    "Blood pressure issues",
    "Lower spine injuries",
    "Neck, hip, and hamstring injuries"
  ],
  level: "Intermediate",
  type: "Forward-Bend",
  quality: "Calming"
},
  {
  englishName: "Raised Arm Pose",
  sanskritName: "Hasta Uttanasana",
  description: "A backbend that strengthens the back muscles, improves spinal flexibility, and opens the heart.",
  benefit: "Strengthens the back muscles, improves spinal flexibility, and opens the heart.",
  mainFocus: ["Back Strength", "Spinal Flexibility", "Heart Opening", "Balance"],
  keys: [
    "Shoulders wide apart",
    "Chest expanded",
    "Gaze at fingertips",
    "Hips forward",
    "Legs zipped together",
    "Feet pressing firmly on the floor",
    "Use breath properly to avoid compressing the lower back",
    "Avoid straining the shoulders and neck"
  ],
  howToDo: [
    "Stand tall with your feet together.",
    "Inhale, raise your arms overhead, and gently arch your back.",
    "Look up at your fingertips while keeping your core engaged.",
    "Tip: Keep your lower back supported by engaging your core."
  ],
  cautions: [
    "Neck, shoulder, or spine injuries",
    "Blood pressure issues",
    "Lack of balance"
  ],
  level: "Intermediate",
  type: "Back-Bend",
  quality: "Energizing"
},
  {
  englishName: "Reclined Hero Pose",
  sanskritName: "Supta Virasana",
  description: "A deep quadriceps and ankle stretch that also opens the chest and promotes relaxation.",
  benefit: "Stretches the ankles and quadriceps, improves posture, opens the chest, and rejuvenates the knees.",
  mainFocus: ["Quadriceps Stretch", "Chest Opening", "Posture Improvement", "Knee Rejuvenation"],
  keys: [
    "Hips rest between the feet",
    "Knees and shoulders rest on the mat",
    "Chest expansion",
    "Arms along the ears",
    "Extend one leg if discomfort arises in the knees"
  ],
  howToDo: [
    "Begin in Hero Pose (Virasana) with knees together and feet apart.",
    "Slowly lean back onto your hands, then forearms, then all the way down if comfortable.",
    "Rest your shoulders and head on the floor while keeping your arms alongside your ears.",
    "Tip: Use a bolster or block under your back for support if needed."
  ],
  cautions: [
    "Knee injuries",
    "Neck pain",
    "Lower back issues"
  ],
  level: "Intermediate",
  type: "Back-Bend",
  quality: "Calming"
},
  {
  englishName: "Reclining Bound Angle Pose",
  sanskritName: "Supta Baddha Konasana",
  description: "A deeply relaxing and restorative pose that opens the inner thighs and groin while calming the mind.",
  benefit: "Relaxes and restores the body, stretches the inner thighs and groin, alleviates menstrual pain.",
  mainFocus: ["Relaxation", "Inner Thigh & Groin Stretch", "Menstrual Pain Relief"],
  keys: [
    "The whole body should be relaxed",
    "Let gravity work for you",
    "The knees do not need to touch the ground"
  ],
  howToDo: [
    "Lay on your back with your knees bent and feet together.",
    "Allow your knees to fall open to the sides.",
    "Tip: Place cushions under your knees for extra support."
  ],
  cautions: [
    "Lower back pain",
    "Knee injuries",
    "Hip injuries"
  ],
  level: "Beginner",
  type: "Restorative",
  quality: "Calming"
},
  {
  englishName: "Reverse Prayer Pyramid Pose",
  sanskritName: "Parsvottanasana Paschima Namaskarasana",
  description: "A deep forward bend that enhances flexibility in the hamstrings, wrists, shoulders, hips, and spine while promoting balance and relaxation.",
  benefit: "Develops stamina, tones the legs, improves flexibility in hamstrings, wrists, shoulders, hips, and spine, relaxes the mind.",
  mainFocus: ["Leg Strength", "Hamstring Flexibility", "Wrist & Shoulder Mobility", "Balance"],
  keys: [
    "Keep the shoulders relaxed",
    "Hips squared",
    "Elbows pointing outward"
  ],
  cautions: [
    "Blood pressure issues",
    "Lower spine injuries",
    "Wrist and shoulder injuries"
  ],
  level: "Intermediate",
  type: "Forward-Bend",
  quality: "Calming"
},
  {
  englishName: "Revolved Head to Knee Pose",
  sanskritName: "Parivrtta Janu Sirsasana",
  description: "A twisting seated pose that stretches the side body, hamstrings, and abdomen while enhancing flexibility and balance.",
  benefit: "Brings a deep lateral stretch, strengthens hamstrings, compresses abdominal muscles and organs, and prepares the body for meditation or splits.",
  mainFocus: ["Side Body Stretch", "Hamstring Flexibility", "Abdominal Compression", "Twisting Motion"],
  keys: [
    "Both hips on the floor",
    "Legs active and pressing down",
    "Chest facing up",
    "Side of the body long",
    "Gaze up",
    "Arms pulling the flexed foot"
  ],
  cautions: [
    "Hernia",
    "Spine injuries",
    "Irritable bowel syndrome",
    "Hamstring injuries"
  ],
  level: "Intermediate",
  type: "Twist",
  quality: "Calming"
},
  {
  englishName: "Revolved Triangle Pose",
  sanskritName: "Parivrtta Trikonasana",
  description: "A standing twist that enhances balance, stretches the hamstrings and shoulders, and strengthens the core and legs.",
  benefit: "Stretches hamstrings, calves, side abdominal muscles, and shoulders. Massages abdominal organs and improves posture. Strengthens legs, upper back, and shoulders.",
  mainFocus: ["Hamstring Flexibility", "Core Strength", "Balance", "Spinal Rotation"],
  keys: [
    "Feet pressing firmly into the ground",
    "Legs active and strong",
    "Hips aligned at the same level",
    "Spine elongated",
    "Chest and shoulders open",
    "Back leg engaged"
  ],
  cautions: [
    "Knee, hip, spine, shoulder, or neck injuries",
    "Migraines",
    "Hypertension"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Sage Marichi 1",
  sanskritName: "Marichyasana I",
  description: "A seated forward bend that stretches the hamstrings, hips, shoulders, and back while promoting digestion and relaxation.",
  benefit: "Tones the hips and abdomen, calms the mind, improves digestion and metabolism. Enhances flexibility in the hamstrings, buttocks, shoulders, and back while opening the chest.",
  mainFocus: ["Hamstring Stretch", "Hip Flexibility", "Digestive Stimulation", "Relaxation"],
  keys: [
    "Front leg active and foot flexed",
    "Spine elongated",
    "Arms wrapped around the bent leg",
    "Head resting on the knee"
  ],
  cautions: [
    "Migraine",
    "High blood pressure",
    "Ankle, hip, knee, shoulder, or neck injuries"
  ],
  level: "Intermediate",
  type: "Forward-bend",
  quality: "Calming"
},
  {
  englishName: "Sage Marichi 3",
  sanskritName: "Marichyasana III",
  description: "A seated spinal twist that enhances spinal mobility, stretches intercostal muscles, and massages abdominal organs.",
  benefit: "Increases spinal mobility, stretches the intercostal muscles, and massages abdominal organs, especially the liver and kidneys. Relieves back and hip pain, promotes shoulder and hip opening, and elongates the spine.",
  mainFocus: ["Spinal Twist", "Hip Flexibility", "Abdominal Organ Massage", "Back Pain Relief"],
  keys: [
    "Extended leg active and foot flexed",
    "Spine elongated",
    "Arms active and squeezing the bent leg",
    "Gaze over your shoulder",
    "Do not lean back"
  ],
  cautions: [
    "Migraine",
    "Insomnia",
    "Serious back injuries"
  ],
  level: "Intermediate",
  type: "Twist",
  quality: "Calming"
},
  {
  englishName: "Seated Forward Bend",
  sanskritName: "Paschimottanasana",
  description: "A deep forward fold that stretches the lower back, calves, and hamstrings while promoting relaxation and introspection.",
  benefit: "Stretches lower back muscles, calves, and hamstrings. Stimulates and tones the abdominal organs. Encourages introspection and calms the nervous system.",
  mainFocus: ["Hamstring Stretch", "Lower Back Stretch", "Abdominal Stimulation", "Relaxation"],
  keys: [
    "Elbows pointing down",
    "Shoulders and neck relaxed",
    "Do not round the spine"
  ],
  cautions: [
    "Pregnancy",
    "Hernia",
    "Back or spine injury",
    "Sciatica"
  ],
  level: "Intermediate",
  type: "Forward Bend",
  quality: "Calming"
},
  {
  englishName: "Shoulder Stand",
  sanskritName: "Sarvangasana",
  description: "An inversion pose that improves body awareness, increases blood circulation to the brain, and helps realign the vertebrae.",
  benefit: "Tranquilizes the mind and relieves stress. Stimulates the thyroid gland and balances the nervous, reproductive, endocrine, respiratory, circulatory, and digestive systems. Stretches the spine, neck, and shoulders while strengthening the core and legs.",
  mainFocus: ["Spinal Alignment", "Neck and Shoulder Stretch", "Thyroid Stimulation", "Metabolism Regulation"],
  keys: [
    "Chin on the throat",
    "Lift the legs up to lighten the pose",
    "Pelvis above shoulders, heels above hips",
    "Elbows in line with the shoulders",
    "Mind the neck"
  ],
  cautions: [
    "Neck or shoulder injuries",
    "Glaucoma",
    "High blood pressure"
  ],
  level: "Intermediate",
  type: "Inversion",
  quality: "Calming"
},
  {
  englishName: "Side Plank Pose",
  sanskritName: "Vasisthasana",
  description: "A powerful arm balance pose that strengthens the core, arms, shoulders, and improves balance.",
  benefit: "Builds strength in wrists, arms, shoulders, and core. Enhances concentration, stability, and overall body strength.",
  mainFocus: ["Balance", "Core Strength", "Shoulder Stability", "Arm Strength"],
  keys: [
    "Core engaged",
    "Hips lifting up and above each other",
    "Arms in the same line",
    "Maintain balance",
    "Mind the neck"
  ],
  cautions: [
    "Wrists, elbows, or shoulder injuries"
  ],
  level: "Beginner",
  type: "Arm-Balance",
  quality: "Balancing"
},
  {
  englishName: "Staff Pose",
  sanskritName: "Dandasana",
  description: "A foundational seated pose that strengthens the spine, tones the abdominal muscles, and improves body awareness.",
  benefit: "Strengthens the spine and abdominal muscles. Stretches hamstrings, calves, and hips. Enhances posture and alignment.",
  mainFocus: ["Posture", "Core Engagement", "Hamstring Stretch", "Spinal Alignment"],
  keys: [
    "Feet flexed",
    "Sitting bones pressing on the floor",
    "Legs engaged",
    "Lengthen the spine",
    "Shoulders down and relaxed"
  ],
  cautions: [
    "Lower back injuries",
    "Sciatica"
  ],
  level: "Beginner",
  type: "Seated",
  quality: "Grounding"
},
  {
  englishName: "Standing Forward Pose",
  sanskritName: "Uttanasana",
  description: "A calming forward bend that relieves stress and stretches the hamstrings, calves, and spine.",
  benefit: "Relieves stress, reduces fatigue and anxiety. Stretches hamstrings, calves, and hips while strengthening thighs and knees. Lengthens the spinal muscles and calms the nervous system.",
  mainFocus: ["Relaxation", "Digestion", "Stretching", "Calming the nervous system"],
  keys: [
    "Bend from the hips",
    "Tailbone upward",
    "Keep the spine elongated",
    "Belly onto the thighs",
    "Face as close to the knees as comfortable",
    "Allow bending the knees if the spine rounds"
  ],
  cautions: [
    "High blood pressure",
    "Disc herniation",
    "Hamstring tears"
  ],
  level: "Beginner",
  type: "Forward-Bend",
  quality: "Calming"
},
  {
  englishName: "Super Fish Pose",
  sanskritName: "Matsyasana Variation",
  description: "An energizing inversion that opens the chest and strengthens the core, legs, and back.",
  benefit: "Opens the chest and stretches the neck and spine. Strengthens quadriceps, gluteus maximus, core, and back muscles. Stimulates the abdominal organs, cranial, and thyroid gland.",
  mainFocus: ["Chest opening", "Core and back strengthening", "Spinal arching", "Energy boost"],
  keys: [
    "Top of the head gently resting on the floor",
    "Chest lifted up",
    "Spine arched",
    "Hips on the floor",
    "Legs and arms lifted and engaged"
  ],
  cautions: [
    "Avoid neck compression",
    "Spine or cervical injuries",
    "High blood pressure may cause dizziness"
  ],
  level: "Intermediate",
  type: "Inversion",
  quality: "Energizing"
},
  {
  englishName: "Supine Spinal Twist",
  sanskritName: "Supta Matsyendrasana",
  description: "A calming twist that relaxes the spine, stretches the obliques, glutes, and chest, and improves digestion.",
  benefit: "Massages and tones the abdominal organs and muscles. Relaxes the spine. Stretches the obliques, glutes, and chest. Enhances spinal and shoulder flexibility while aiding digestion.",
  mainFocus: ["Spinal relaxation", "Abdominal massage", "Shoulder and oblique stretching", "Digestion improvement"],
  keys: [
    "Hips stacked on top of each other",
    "Awareness of lower back alignment",
    "Focus on deep breathing",
    "Shoulders remain on the floor",
    "Avoid forcefully pressing the knee down"
  ],
  cautions: [
    "Cervical (neck) and lumbar (lower back) issues"
  ],
  level: "Beginner",
  type: "Twist",
  quality: "Calming"
},
  {
  englishName: "Supported Headstand Pose",
  sanskritName: "Salamba Sirsasana",
  description: "An inversion that strengthens the entire body, enhances balance, and improves circulation while toning the pituitary gland.",
  benefit: "Strengthens the entire body. Increases blood circulation and tones the pituitary gland. Enhances balance, awareness, and relieves stress.",
  mainFocus: ["Full-body strength", "Balance improvement", "Circulatory enhancement", "Nervous system stimulation"],
  keys: [
    "Heels, hips, and shoulders vertically aligned",
    "Tailbone tucked in",
    "Push the floor away",
    "Engage lower arms and shoulders to reduce neck strain"
  ],
  cautions: [
    "Neck and back injuries",
    "Blood pressure issues",
    "Headaches"
  ],
  level: "Intermediate",
  type: "Inversion",
  quality: "Energizing"
},
  {
  englishName: "Table Pose",
  sanskritName: "Bharmanasana",
  description: "A foundational pose that gently stretches and warms up muscles and joints, enhancing body awareness and balance.",
  benefit: "Improves posture, enhances body awareness, relieves tension, and prepares the body for deeper poses.",
  mainFocus: ["Full-body awareness", "Spinal alignment", "Muscle warm-up", "Tension release"],
  keys: [
    "Knees and shoulders directly above ankles and wrists respectively",
    "Hips, knees, and shoulders aligned",
    "Spine elongated",
    "Gaze down for neck alignment"
  ],
  cautions: [
    "Wrist injuries",
    "Shoulder injuries"
  ],
  level: "Beginner",
  type: "Preparatory",
  quality: "Grounding"
},
  {
  englishName: "Tree Pose",
  sanskritName: "Vrksasana",
  description: "A balancing pose that enhances focus, stability, and body awareness while strengthening the legs.",
  benefit: "Calms the mind, improves balance, strengthens the supporting leg, and opens the hips.",
  mainFocus: ["Balance", "Concentration", "Leg Strength", "Hip Opening"],
  keys: [
    "Engage the standing foot and leg",
    "Hips facing forward",
    "Press foot into the inner thigh (or calf if needed)",
    "Spine elongated",
    "Avoid pressing foot on the knee"
  ],
  howToDo: [
    "Stand on one foot and bring the other foot to the inner thigh or calf.",
    "Press your palms together at your chest.",
    "Focus your gaze on a fixed point for balance."
  ],
  cautions: [
    "Ankle injuries",
    "Knee injuries",
    "Hip injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Grounding"
},
  {
  englishName: "Triangle Pose",
  sanskritName: "Utthita Trikonasana",
  description: "A standing pose that enhances flexibility, strength, and balance while deeply stretching the body.",
  benefit: "Improves hip joint rotation, strengthens legs, upper back, and shoulders, enhances digestion, and tones reproductive organs.",
  mainFocus: ["Hip Opening", "Shoulder Stretch", "Side Body Stretch", "Core Engagement"],
  keys: [
    "Press feet firmly into the ground",
    "Bend from the hips, not the waist",
    "Keep spine long and chest open",
    "Lift chest upward to avoid collapsing",
    "Adjust gaze to the side if looking up causes discomfort"
  ],
  howToDo: [
    "Stand with feet wider than hips.",
    "Turn your right foot out and extend arms parallel to the floor.",
    "Reach toward your right foot, placing your hand on your shin or ankle.",
    "Extend your left arm up and open your chest."
  ],
  tip: "Keep your chest open by bringing your shoulder blades toward your spine.",
  cautions: [
    "Knee injuries",
    "Hamstring strain",
    "Hip pain",
    "Back or neck issues"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Upward Facing Dog",
  sanskritName: "Urdhva Mukha Svanasana",
  description: "A backbend pose that strengthens the arms, core, and legs while promoting deep breathing and chest opening.",
  benefit: "Promotes proper deep breathing, improves lung capacity and blood circulation, tones the core, and strengthens the arms, thighs, and glutes.",
  mainFocus: ["Back Strength", "Shoulder Stability", "Chest Opening", "Core Engagement"],
  keys: [
    "Keep legs active and hips lifted off the floor",
    "Elongate the spine and engage the core",
    "Open the chest and roll shoulders back",
    "Align shoulders with wrists",
    "Avoid locking elbows—keep a slight bend"
  ],
  howToDo: [
    "Lie on your stomach with hands under shoulders.",
    "Press into your hands and inhale to lift your chest and thighs off the floor.",
    "Keep arms engaged and shoulders away from ears."
  ],
  tip: "Keep your elbows slightly bent to protect your joints.",
  cautions: [
    "Ankle injuries",
    "Wrist strain",
    "Elbow pain",
    "Neck or spine injuries",
    "Shoulder issues (e.g., winged scapula)"
  ],
  level: "Beginner",
  type: "Arm Balance",
  quality: "Energizing"
},
  {
  englishName: "Upward Salute",
  sanskritName: "Urdhva Hastasana",
  description: "A standing yoga pose that stretches the spine, tones the nerves, and improves posture.",
  benefit: "Improves posture, stretches the abdomen, elongates the spine, enhances digestion, and boosts confidence.",
  mainFocus: ["Spinal Elongation", "Core Activation", "Shoulder Mobility", "Posture Improvement"],
  keys: [
    "Press feet firmly into the ground",
    "Engage the legs and keep spine elongated",
    "Lift arms alongside the ears without shrugging shoulders",
    "Gaze up at the thumbs while keeping the neck relaxed"
  ],
  howToDo: [
    "Start in Mountain Pose.",
    "Inhale and raise your arms overhead, keeping shoulders relaxed.",
    "Bring your palms together and gaze up at your thumbs."
  ],
  tip: "Make sure to keep your head aligned with your spine to avoid strain.",
  cautions: [
    "High blood pressure",
    "Neck injuries",
    "Shoulder discomfort or injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Warrior 1",
  sanskritName: "Virabhadrasana I",
  description: "A powerful standing pose that improves hip rotation, strengthens the body, and enhances breathing and circulation.",
  benefit: "Enhances hip mobility, strengthens legs and core, opens the chest, and boosts confidence.",
  mainFocus: ["Hip Rotation", "Leg Strength", "Spinal Mobility", "Chest Opening", "Grounding"],
  keys: [
    "Front knee aligned above the heel",
    "Hips squared forward, tailbone tucked in",
    "Legs and core engaged for stability",
    "Chest lifted with back foot pressing firmly into the ground"
  ],
  howToDo: [
    "Stand with your feet wide apart.",
    "Turn your right foot out and bend your right knee.",
    "Raise your arms overhead, keeping your hips facing forward."
  ],
  tip: "Square your hips to the front for proper alignment.",
  cautions: [
    "Knee or hip injuries",
    "High or low blood pressure",
    "Difficulty balancing"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Warrior 2",
  sanskritName: "Virabhadrasana II",
  description: "A grounding and strengthening standing pose that improves hip mobility, posture, and circulation.",
  benefit: "Strengthens the legs, shoulders, back, and chest. Opens the rib cage, invigorates the nervous system, and enhances confidence.",
  mainFocus: ["Hip Opener", "Leg Strength", "Shoulder Stability", "Respiration & Circulation"],
  keys: [
    "Front knee aligned above the heel",
    "Hips facing the side, tailbone tucked in",
    "Arms extended in a straight line, shoulders relaxed",
    "Gaze over the front fingertips"
  ],
  howToDo: [
    "From Warrior 1, open your arms and hips to face the side.",
    "Extend your arms parallel to the floor and gaze over your right fingertips."
  ],
  tip: "Engage your core and keep your shoulders relaxed.",
  cautions: [
    "Sacroiliac injury or inflammation",
    "Ankle, knee, or hip injuries"
  ],
  level: "Beginner",
  type: "Standing",
  quality: "Grounding"
},
  {
  englishName: "Warrior 3",
  sanskritName: "Virabhadrasana III",
  description: "A powerful balancing pose that strengthens the legs, core, and shoulders while improving focus and control.",
  benefit: "Strengthens the groin, calves, thighs, and ankles. Improves posture, core stability, and upper body strength while enhancing balance and focus.",
  mainFocus: ["Leg Strength", "Core Stability", "Balance", "Posture Improvement"],
  keys: [
    "Lifted heel, hips, shoulders, and ankle aligned",
    "Hips at the same level",
    "Core engaged for stability",
    "Gaze slightly forward to maintain balance"
  ],
  howToDo: [
    "Start in Warrior 1 or Mountain Pose.",
    "Shift your weight onto one leg while extending the other straight back.",
    "Engage your core and extend your arms forward or keep them at your sides."
  ],
  tip: "Keep your hips square and avoid rotating them to maintain alignment.",
  cautions: [
    "Ankle or back injuries",
    "High blood pressure or migraines"
  ],
  level: "Intermediate",
  type: "Standing",
  quality: "Energizing"
},
  {
  englishName: "Wheel Pose",
  sanskritName: "Urdhva Dhanurasana",
  description: "A deep backbend that strengthens the entire body, enhances flexibility, and boosts energy.",
  benefit: "Develops and tones all body muscles. Stretches and lengthens the spine. Beneficial for depression, improves confidence, and boosts energy.",
  mainFocus: ["Full-Body Strength", "Spinal Flexibility", "Chest Opening", "Energy Boost"],
  keys: [
    "Lift the pubis upward",
    "Firmly press palms and feet into the floor",
    "Engage core, legs, and glutes to protect the lower back",
    "Keep the chest open"
  ],
  howToDo: [
    "Lie on your back with your knees bent and feet flat on the floor.",
    "Place your hands beside your ears with fingers pointing toward your shoulders.",
    "Press into your hands and feet, lifting your body into an arch."
  ],
  tip: "Engage your quads and glutes to help protect your lower back.",
  cautions: [
    "Wrist, elbow, shoulder, or spine injuries"
  ],
  level: "Advanced",
  type: "Backbend",
  quality: "Energizing"
},
  {
  englishName: "Wide Angle Seated Forward Bend",
  sanskritName: "Upavistha Konasana",
  description: "A deep forward bend that improves hip flexibility, stretches the hamstrings, and calms the mind.",
  benefit: "Stretches the hip joints, inner thighs, calves, and hamstrings. Stimulates and detoxifies the kidneys. Strengthens the spine.",
  mainFocus: ["Hip Flexibility", "Hamstring Stretch", "Lower Body Stretch", "Spinal Strength"],
  keys: [
    "Legs pressing on the floor",
    "Thighs rolling inward",
    "Pelvic anterior tilt",
    "Spine long, crown reaching forward",
    "Avoid opening the legs too wide"
  ],
  howToDo: [
    "Sit with your legs spread wide apart.",
    "Lengthen your spine as you hinge forward from the hips.",
    "Reach your hands toward your feet or keep them on the floor in front of you."
  ],
  tip: "Bend your knees slightly if you feel tension in the lower back.",
  cautions: [
    "Knees, hips, hamstrings, neck, or lower back injury"
  ],
  level: "Advanced",
  type: "Forward Bend",
  quality: "Calming"
},
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


export default function YogaAsanas() {
  const firebase = useFirebase();

  useEffect(() => {
    async function uploadData() {
      try {
        for (const asana of yogaAsanas) {
            const uniqueId = uuidv4()
          await firebase.putData(`yogaAsanas/${uniqueId}`,{ ...asana, id: uniqueId });
        }
        alert("✅ All Yoga Asanas Added Successfully!");
      } catch (error) {
        alert("🚫 Error Adding Data");
        console.error(error);
      }
    }

    uploadData();
  }, [firebase]);

  return <div className="text-center mt-5 text-lg">Uploading Yoga Asanas...</div>;
}