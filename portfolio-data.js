// Edit the profile and project entries in this file. See README.md for an example.
const portfolio = {
  name: "Zhenyu Zhang",
  affiliation: "Electrical Engineering · University of Illinois Urbana-Champaign",
  biography: "",
  links: [],
  groups: [
    {
      id: "research",
      title: "Research",
      projects: [
        {
          id: "nmr-nqr",
          title: "NMR/NQR Measurements and Pulse Calibration",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        },
        {
          id: "cnt",
          title: "Carbon Nanotube Printing and Electrical Characterization",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        }
      ]
    },
    {
      id: "engineering",
      title: "Course and Engineering Projects",
      projects: [
        {
          id: "autonomous-driving",
          title: "F1TENTH Autonomous Time Trial",
          course: "ECE 484 · Spring 2026",
          summary: "A ROS 2 racing stack for a 1:10-scale F1TENTH car. The project compares map-free LiDAR gap following with waypoint-based pure pursuit in simulation and on the physical car.",
          design: [
            "The reactive controller expands LiDAR obstacle boundaries to account for vehicle width, then scores open gaps and steers toward the best one. Odometry recorded during a reactive run is resampled into waypoints with heading, curvature, and target speed.",
            "Pure pursuit projects the current pose onto the raceline and chooses a lookahead point based on speed. It interpolates waypoint speeds while a LiDAR time-to-collision check can slow or stop the car. A joystick enable gates motion on hardware."
          ],
          figureHeading: "Raceline and Race Telemetry",
          figures: [
            {
              src: "./assets/ece484/raceline-preview.png",
              alt: "Waypoint positions colored by target speed next to a plot of curvature by waypoint index.",
              caption: "Raceline preview. Waypoint colors encode target speed. The plot on the right shows how curvature varies along the path."
            },
            {
              src: "./assets/ece484/final-race-speed.png",
              alt: "Measured and target speed plotted over time for the final pure pursuit race run.",
              caption: "Final-race telemetry. The recorded vehicle speed is plotted against the target speed for run 10."
            }
          ],
          results: "In simulation, gap following completed a lap in 64 s and pure pursuit in 58 s, both without wall contact. The team reported first place in the hardware time trial with a 50.3 s result and no penalties.",
          links: [
            { label: "Final race video", href: "https://www.youtube.com/watch?v=2RBKCkLGlVs" },
            { label: "Team project website", href: "https://safeautonomy-illinois-students.github.io/project-site-invincible_proj/" }
          ]
        },
        {
          id: "android-video",
          title: "Real-Time Foreground Segmentation for Android",
          course: "ECE 420 · Spring 2026",
          summary: "An Android camera app isolates a foreground subject and displays its bounding box and binary mask alongside the live preview. The mask can also keep the subject sharp while blurring the background.",
          design: [
            "OpenCV processes each frame at 320 × 240. It combines motion from MOG2 background subtraction with Lab color contrast and a Gaussian weight centered on the previous detection. The resulting mask provides a bounding box for the candidate foreground.",
            "A background thread runs PyTorch Lite on a 256 × 256 crop of that region. The preview keeps updating using the latest available mask while inference runs. For background blur, the app uses the mask to copy sharp foreground pixels back onto a Gaussian-blurred frame."
          ],
          figureHeading: "On-Device Demo",
          figures: [
            {
              src: "./assets/ece420/foreground-detection.png",
              alt: "Android camera preview showing a green bounding box around a tissue box.",
              caption: "Object test. The green box marks the foreground region selected by the OpenCV pipeline."
            },
            {
              src: "./assets/ece420/foreground-mask.png",
              alt: "Binary foreground mask showing a white silhouette on a black background.",
              caption: "Separate segmentation test. White pixels mark the foreground selected by the refinement model."
            }
          ],
          results: "The refined masks scored 0.764–0.897 intersection over union against manual annotations across three test scenarios. Camera shake and changes in lighting remained sources of segmentation errors.",
          links: []
        },
        {
          id: "fpga-game",
          title: "Wizard of Wor Arcade on FPGA",
          course: "ECE 385 · Fall 2025",
          summary: "A two-player recreation of Wizard of Wor on the Urbana FPGA board. Players share a USB keyboard to navigate four mazes, fire lasers, and compete for the higher score.",
          design: [
            "A MicroBlaze soft processor runs the game logic in C. A frame-driven state machine handles level transitions, while tile checks and bounding-box tests resolve wall and laser collisions. The monster pursues the nearest active player using Manhattan distance.",
            "The software writes positions and attributes to six 32-bit sprite registers over AXI4-Lite. A SystemVerilog pipeline combines maze tiles stored in block RAM with ROM-based sprites at 640 × 480. A fixed priority resolves overlapping sprites. A programmable counter generates square-wave music and sound effects."
          ],
          figureHeading: "Gameplay",
          figures: [
            {
              src: "./assets/ece385/level-1.png",
              alt: "Level 1 maze with two player scores along the top of the screen.",
              caption: "Level 1. The maze view shows a separate score for each player."
            },
            {
              src: "./assets/ece385/completion.png",
              alt: "Completion screen showing player two as MVP and the two final scores.",
              caption: "Completion screen. Clearing all four mazes reveals both final scores and the winning player."
            }
          ],
          results: "The board demo ran all four mazes and displayed the final score comparison. The implementation report lists 4,407 LUTs and 3 DSP blocks.",
          links: []
        },
        {
          id: "llm",
          title: "Large Language Model Development and Post-Training",
          course: "ECE 498JH",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        },
        {
          id: "semiconductor-fab",
          title: "Semiconductor Fabrication and Device Characterization",
          course: "ECE 444",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        },
        {
          id: "cmos-chip",
          title: "CMOS Chip Design",
          course: "ECE 482",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        },
        {
          id: "electronic-nose",
          title: "STM32 Electronic Nose for Food Freshness",
          course: "ECE 445 · Senior Design",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        }
      ]
    }
  ]
};
