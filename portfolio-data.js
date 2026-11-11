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
          title: "F1Tenth Autonomous Driving",
          course: "ECE 484",
          summary: "",
          design: [],
          results: "",
          figures: [],
          links: []
        },
        {
          id: "android-video",
          title: "Android Video Analysis and Object Tracking",
          course: "ECE 420",
          summary: "",
          design: [],
          results: "",
          figures: [],
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
