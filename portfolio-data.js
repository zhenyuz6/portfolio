// All project text, metrics and image selections are editable here.
const portfolio = {
  "name": "Zhenyu Zhang",
  "affiliation": "Electrical Engineering · University of Illinois Urbana-Champaign",
  "biography": "Electrical engineering at the intersection of physical devices, measurement, and computation. Research and projects connect materials and RF instrumentation with circuits, embedded sensing, autonomy, and language models.",
  "links": [
    {
      "label": "zhenyuz6@illinois.edu",
      "href": "mailto:zhenyuz6@illinois.edu"
    },
    {
      "label": "GitHub",
      "href": "https://github.com/zhenyuz6"
    }
  ],
  "groups": [
    {
      "id": "research",
      "title": "Research",
      "projects": [
        {
          "id": "nmr-nqr",
          "title": "NMR/NQR Instrumentation and Pulse Calibration",
          "summary": "An RF measurement platform connects a custom probe, electrical tuning, and automated acquisition to investigate crystal-sample responses and calibrate pulsed excitation.",
          "design": [
            "A custom induction coil and varactor matching network tune the probe electrically. LabVIEW/GPIB automate acquisition, while PID temperature control and magnetic-field settings support comparisons across experimental conditions.",
            "Nutation sweeps calibrate pulse width; frequency-offset tests investigate how the peak response shifts. Two-pulse experiments vary pulse separation and acquisition bandwidth to distinguish sample behavior from receiver transients."
          ],
          "results": "Nutation measurements calibrated approximately 23 µs and 47 µs pulse widths for 90° and 180° rotations near 29.928 MHz. Two-pulse echo validation remains in progress.",
          "figures": [
            {
              "src": "./assets/nmr/laboratory-setup.jpg",
              "alt": "The NMR laboratory with an instrument rack, sample apparatus, cables, and control computer.",
              "caption": "Laboratory setup. The instrument rack, sample apparatus, and computer form the excitation and measurement workflow."
            },
            {
              "src": "./assets/nmr/network-analyzer.jpg",
              "alt": "A network analyzer displaying the RF response on a Smith chart.",
              "caption": "RF tuning. The network analyzer provides a view of the probe response during impedance matching."
            },
            {
              "src": "./assets/nmr/lock-in-readout.jpg",
              "alt": "Lock-in amplifiers and a capacitance bridge in the laboratory instrument rack.",
              "caption": "Measurement instruments. Lock-in amplifiers and a capacitance bridge support the laboratory readout."
            },
            {
              "src": "./assets/nmr/two-pulse-acquisition.png",
              "alt": "SpinCore two-pulse NMR and NQR interface with 29.928 MHz excitation, 23 and 47 microsecond pulses, and a time-domain acquisition trace.",
              "caption": "Two-pulse acquisition near 29.928 MHz. The early transient and later signal are being investigated as part of echo validation."
            },
            {
              "src": "./assets/nmr/labview-acquisition.jpg",
              "alt": "LabVIEW measurement plots displayed on the laboratory computer.",
              "caption": "Acquisition software. LabVIEW displays the measured response as experiment settings are varied."
            }
          ],
          "links": [],
          "course": "Research · 2024–present",
          "figureHeading": "RF Instrumentation and Acquisition",
          "figureLayout": "showcase",
          "category": "RF instrumentation",
          "shortTitle": "NMR / NQR instrumentation",
          "tags": [
            "RF circuits",
            "LabVIEW / GPIB",
            "SpinCore"
          ],
          "insight": "Pulse calibration and echo validation are separate steps: an early transient cannot by itself establish that an echo has been observed.",
          "metrics": [
            [
              "29.928 MHz",
              "Excitation frequency"
            ],
            [
              "23 / 47 µs",
              "Calibrated 90° / 180° pulses"
            ],
            [
              "In progress",
              "Two-pulse echo validation"
            ]
          ],
          "primary": [
            0,
            3
          ],
          "diagram": null,
          "printSupplement": [
            1,
            2,
            4
          ],
          "printSupplementTitle": "RF instrumentation & acquisition displays",
          "printSupplementSummary": "Additional laboratory views document probe matching, instrument readout, and software-based acquisition alongside the pulse-calibration study."
        },
        {
          "id": "cnt",
          "title": "3D Printing with Carbon Nanotube Inks",
          "summary": "CNT ink formulation, programmed deposition, and electrical characterization connect printable nanomaterials to functional structures and metal-contact interfaces.",
          "design": [
            "SDS/SDOC formulations and rheological measurements guide the ink and printing conditions. Sample-dependent motion settings, mass and dimensional measurements, furnace treatment, and SEM connect deposition to the dried structure.",
            "Pulsed nickel plating explores electrical interfaces. Middle-section four-probe measurements and end-to-end resistance probe different parts of the sample, helping distinguish bulk behavior from the influence of its metal contacts."
          ],
          "results": "Printing retained approximately 60% of the printed area after drying and increased density about 20% over baseline. Updated measurements on approximately 2.2 cm CNT sections showed a 23–27% reduction in end-to-end resistance between metal contacts after nickel plating.",
          "figures": [
            {
              "src": "./assets/cnt/printing-demo.jpg",
              "alt": "The laboratory 3D printer with its red print head above the deposition stage.",
              "caption": "Programmed deposition. A frame from the CNT printing demonstration shows the print head and deposition platform."
            },
            {
              "src": "./assets/cnt/printed-specimens.jpg",
              "alt": "Two dark CNT specimens on substrates in separate sample dishes.",
              "caption": "Printed specimens. Samples are prepared for dimensional and electrical characterization."
            },
            {
              "src": "./assets/cnt/sem-microstructure.jpg",
              "alt": "SEM micrograph of a textured CNT structure with a two-micrometer scale bar.",
              "caption": "SEM inspection. The microstructure is shown with the original 2 µm scale bar."
            },
            {
              "src": "./assets/cnt/electroplating-cell.jpg",
              "alt": "An electroplating cell with electrical leads attached to the sample and electrodes.",
              "caption": "Electrical interfaces. The plating cell connects the sample and electrodes for pulsed nickel deposition."
            },
            {
              "src": "./assets/cnt/pulse-configuration.jpg",
              "alt": "The instrument settings for a 15-milliamp charge step and rest sequence.",
              "caption": "Pulse configuration. A 0.1 s deposition step followed by 9.9 s of rest defines a 1% duty cycle."
            }
          ],
          "links": [],
          "course": "Research · 2025–present",
          "figureHeading": "Printing, Microstructure, and Electrical Interfaces",
          "figureLayout": "showcase",
          "category": "Nanomaterials",
          "shortTitle": "3D printing with CNT inks",
          "tags": [
            "Ink formulation",
            "SEM",
            "Four-probe testing"
          ],
          "insight": "Comparing middle-section four-probe measurements with end-to-end resistance helps distinguish the CNT network response from the influence of its metal contacts.",
          "metrics": [
            [
              "~60%",
              "Printed area retained after drying"
            ],
            [
              "~20%",
              "Density increase over baseline"
            ],
            [
              "23–27%",
              "End-to-end resistance reduction"
            ]
          ],
          "primary": [
            0,
            2
          ],
          "diagram": "./assets/diagrams/cnt-workflow.svg"
        }
      ]
    },
    {
      "id": "engineering",
      "title": "Course and Engineering Projects",
      "projects": [
        {
          "id": "autonomous-driving",
          "title": "F1TENTH Autonomous Time Trial",
          "course": "ECE 484 · Spring 2026",
          "summary": "A ROS 2 racing stack for a 1:10-scale car compares reactive LiDAR gap following with waypoint-based pure pursuit, from simulation to a physical time trial.",
          "design": [
            "Gap following expands obstacle boundaries to account for vehicle width, scores open LiDAR gaps, and selects a steering target. Recorded odometry is resampled into a raceline with heading, curvature, and target speed.",
            "Pure pursuit projects the pose onto that raceline and uses a speed-dependent lookahead. Interpolated target speeds, LiDAR time-to-collision braking, and a joystick enable connect path tracking to safer hardware operation."
          ],
          "figureHeading": "Hardware Demo and Race Telemetry",
          "figures": [
            {
              "src": "./assets/ece484/hardware-run.jpg",
              "alt": "The F1TENTH car rounds a bend between orange barriers on the indoor track.",
              "caption": "Pure pursuit hardware test. The F1TENTH car rounds a corner on the indoor course."
            },
            {
              "src": "./assets/ece484/raceline-preview.png",
              "alt": "Waypoint positions colored by target speed next to a plot of curvature by waypoint index.",
              "caption": "Raceline preview. Waypoint colors encode target speed. The plot on the right shows how curvature varies along the path."
            },
            {
              "src": "./assets/ece484/final-race-speed.png",
              "alt": "Measured and target speed plotted over time for the final pure pursuit race run.",
              "caption": "Final-race telemetry. The recorded vehicle speed is plotted against the target speed for run 10."
            }
          ],
          "results": "In simulation, gap following completed a lap in 64 s and pure pursuit in 58 s, both without wall contact. The team reported first place in the hardware time trial with a 50.3 s result and no penalties.",
          "links": [
            {
              "label": "Pure pursuit hardware demo",
              "href": "https://www.youtube.com/watch?v=8iU1RW6KDh4&source_ve_path=MTc4NDI0"
            },
            {
              "label": "Final race video",
              "href": "https://www.youtube.com/watch?v=2RBKCkLGlVs"
            },
            {
              "label": "Team project website",
              "href": "https://safeautonomy-illinois-students.github.io/project-site-invincible_proj/"
            }
          ],
          "figureLayout": "featured",
          "category": "Autonomous systems",
          "shortTitle": "F1TENTH autonomous racing",
          "tags": [
            "ROS 2",
            "LiDAR",
            "Pure pursuit"
          ],
          "insight": "A curvature-aware raceline and speed-dependent lookahead connect steering geometry to speed selection; time-to-collision braking provides a separate response to immediate obstacles.",
          "metrics": [
            [
              "50.3 s",
              "Hardware time trial"
            ],
            [
              "1st place",
              "Final physical race"
            ],
            [
              "0 penalties",
              "Final hardware run"
            ]
          ],
          "primary": [
            0,
            1,
            2
          ],
          "diagram": null
        },
        {
          "id": "android-video",
          "title": "Real-Time Foreground Segmentation for Android",
          "course": "ECE 420 · Spring 2026",
          "summary": "An Android camera application segments a foreground subject and blurs the background through a hybrid pipeline that combines lightweight image processing with neural refinement.",
          "design": [
            "At 320 × 240, MOG2 motion cues, Lab color contrast, and a Gaussian prior locate a candidate foreground region. PyTorch Lite refines a 256 × 256 crop, reducing the area sent to the model.",
            "Asynchronous latest-frame inference decouples model execution from display updates. The preview reuses the latest mask; compositing copies sharp foreground pixels onto a Gaussian-blurred background."
          ],
          "figureHeading": "On-Device Demo",
          "figures": [
            {
              "src": "./assets/ece420/foreground-detection.png",
              "alt": "Android camera preview showing a green bounding box around a tissue box.",
              "caption": "Object test. The green box marks the foreground region selected by the OpenCV pipeline."
            },
            {
              "src": "./assets/ece420/foreground-mask.png",
              "alt": "Binary foreground mask showing a white silhouette on a black background.",
              "caption": "Separate segmentation test. White pixels mark the foreground selected by the refinement model."
            }
          ],
          "results": "CPU-only application frame rate increased from approximately 3–4 to a stable 60 FPS at unchanged device and resolution settings. Refined masks achieved 0.764–0.897 IoU across three annotated scenarios; motion and lighting changes remained limitations.",
          "links": [],
          "category": "Embedded vision",
          "shortTitle": "Real-time Android segmentation",
          "tags": [
            "OpenCV",
            "PyTorch Lite",
            "CPU optimization"
          ],
          "insight": "The 60 FPS result describes the application preview. Updating it independently of neural inference prevents a slow model pass from blocking every displayed frame.",
          "metrics": [
            [
              "3–4 → 60 FPS",
              "Application frame rate"
            ],
            [
              "0.764–0.897",
              "IoU across three test scenarios"
            ],
            [
              "CPU only",
              "On-device processing"
            ]
          ],
          "primary": [
            0,
            1
          ],
          "diagram": "./assets/diagrams/android-pipeline.svg"
        },
        {
          "id": "fpga-game",
          "title": "Wizard of Wor Arcade on FPGA",
          "course": "ECE 385 · Fall 2025",
          "summary": "A two-player arcade game on an Urbana FPGA board integrates USB keyboard input, four mazes, real-time graphics, collision handling, scoring, and synthesized sound.",
          "design": [
            "A MicroBlaze soft processor runs frame-driven game logic in C. Tile checks and bounding-box tests handle wall and laser collisions; Manhattan distance guides the monster toward the nearest active player.",
            "Six 32-bit AXI4-Lite sprite registers connect software to a SystemVerilog renderer. Block-RAM maze tiles, ROM sprites, and fixed overlap priority generate 640 × 480 graphics; programmable counters generate square-wave audio."
          ],
          "figureHeading": "Gameplay",
          "figures": [
            {
              "src": "./assets/ece385/level-1.png",
              "alt": "Level 1 maze with two player scores along the top of the screen.",
              "caption": "Level 1. The maze view shows a separate score for each player."
            },
            {
              "src": "./assets/ece385/completion.png",
              "alt": "Completion screen showing player two as MVP and the two final scores.",
              "caption": "Completion screen. Clearing all four mazes reveals both final scores and the winning player."
            }
          ],
          "results": "The board demo ran all four mazes and displayed the final score comparison. The implementation report lists 4,407 LUTs and 3 DSP blocks.",
          "links": [],
          "category": "Digital systems",
          "shortTitle": "Wizard of Wor on FPGA",
          "tags": [
            "MicroBlaze / C",
            "SystemVerilog",
            "AXI4-Lite"
          ],
          "insight": "Game rules execute in software, while graphics and sound use dedicated hardware paths. The small sprite-register interface keeps their interaction explicit and manageable.",
          "metrics": [
            [
              "4 mazes",
              "Two-player gameplay"
            ],
            [
              "640 × 480",
              "Graphics output"
            ],
            [
              "4,407 LUTs",
              "Reported FPGA utilization"
            ]
          ],
          "primary": [
            0,
            1
          ],
          "diagram": "./assets/diagrams/fpga-pipeline.svg"
        },
        {
          "id": "llm",
          "title": "Language Model Construction, Training, and Serving",
          "course": "ECE 498JH · Fall 2026",
          "summary": "A language-model workflow connects Transformer implementation and attention benchmarks with mathematical-reasoning post-training, preference optimization, and inference scheduling.",
          "design": [
            "Qwen3-compatible Transformer components are checked against reference outputs before attention throughput and memory benchmarks. Supervised fine-tuning and GRPO precede a controlled DPO/SimPO comparison; per-step reward and KL traces track the GRPO optimization process.",
            "Shared preference pairs support comparisons of strict GSM8K accuracy, answer format, and paired judge preferences. Serving experiments compare FCFS and SJF scheduling and vary decode passes between scheduler calls."
          ],
          "results": "DPO-B reached 55.80% strict accuracy and matched-rate SimPO reached 55.57%. SimPO used 24.1 GiB peak allocated GPU memory versus DPO-B's 26.9 GiB. Serving tests also exposed a latency trade-off as more decode passes delayed new requests.",
          "figures": [
            {
              "src": "./assets/llm/gsm8k-comparison.png",
              "alt": "Strict GSM8K accuracy for the GRPO checkpoint, DPO-B, and SimPO at two learning rates.",
              "caption": "GSM8K evaluation on 1,319 test questions. The higher SimPO learning rate reduced strict accuracy despite improving training-pair ranking."
            },
            {
              "src": "./assets/llm/serving-latency-throughput.png",
              "alt": "Two plots compare p95 time to first token and decode throughput for one, four, and eight decode passes between scheduler calls.",
              "caption": "FCFS serving at 0.24 offered requests/s. Increasing decode passes from 1 to 8 raises p95 first-token latency from 1.83 to 4.34 s, while output throughput changes from 36.2 to 37.3 tokens/s. Source: MP3 Checkpoint 1 report."
            },
            {
              "src": "./assets/llm/grpo-training-dynamics.png",
              "alt": "Logged mean training reward and mean KL over 400 GRPO optimizer steps, with all raw steps and a 25-step trailing average.",
              "caption": "GRPO training telemetry over 400 updates. The first and last 25-step mean rewards are 0.310 and 0.656. Raw steps remain visible, including a KL spike at update 318. Training reward is distinct from held-out GSM8K accuracy."
            }
          ],
          "links": [
            {
              "label": "GRPO training data (CSV)",
              "href": "./assets/llm/grpo-training-telemetry.csv"
            }
          ],
          "figureHeading": "Preference-Tuning Results",
          "figureLayout": "wide",
          "category": "Machine learning systems",
          "shortTitle": "Language model development",
          "tags": [
            "PyTorch",
            "Qwen3-0.6B",
            "H100 NVL"
          ],
          "insight": "Improved training-pair ranking did not guarantee better test accuracy. The higher-rate SimPO run makes the need for held-out reasoning evaluation visible.",
          "metrics": [
            [
              "55.80%",
              "DPO-B strict GSM8K accuracy"
            ],
            [
              "1,319",
              "GSM8K test questions"
            ],
            [
              "24.1 GiB",
              "SimPO peak allocated memory"
            ]
          ],
          "primary": [
            0,
            2,
            1
          ],
          "diagram": "./assets/diagrams/llm-workflow.svg",
          "printPrimary": [
            0
          ],
          "printSupplement": [
            2,
            1
          ],
          "printSupplementTitle": "Training dynamics & serving trade-offs",
          "printSupplementSummary": "Raw GRPO training telemetry documents reward and policy drift. A separate FCFS scheduling sweep measures inference throughput and first-token latency.",
          "printSupplementNote": "The training trace shows higher reward alongside non-monotonic KL, so the raw fluctuations remain visible. In the separate serving experiment, about 3% more output throughput accompanies a 2.37× increase in p95 time to first token."
        },
        {
          "id": "semiconductor-fab",
          "title": "Semiconductor Fabrication and Device Characterization",
          "course": "ECE 444 · Fall 2026",
          "summary": "A five-mask cleanroom sequence translates wafer preparation and patterned device structures into fabricated semiconductor devices and electrical characterization.",
          "design": [
            "Wafer cleaning, oxidation, photoresist patterning, etching, and dopant diffusion build device regions before metallization. Each mask contributes a distinct part of the final test structures.",
            "Probe-station I–V and C–V measurements connect processing to diode and transistor behavior. Characterization exercises extract diode parameters, BJT gain, and MOSFET threshold voltage from measured responses."
          ],
          "results": "The five-mask fabrication sequence was completed and 14 fabricated devices were tested. The device-characterization report includes BJT gain of approximately 135–194 across its measured range.",
          "figures": [
            {
              "src": "./assets/ece444/patterned-wafer.jpg",
              "alt": "A patterned wafer held in a gloved hand under amber cleanroom lighting.",
              "caption": "Wafer processing. Repeated test structures are visible across the wafer under cleanroom lighting."
            },
            {
              "src": "./assets/ece444/microscope-inspection.jpg",
              "alt": "Device features and numbered contact pads viewed through the laboratory microscope software.",
              "caption": "Microscope inspection. Device features and contact pads are examined before electrical testing."
            },
            {
              "src": "./assets/ece444/bjt-current-gain.png",
              "alt": "Measured BJT current gain beta as a function of collector current from the device characterization report.",
              "caption": "BJT characterization exercise. Current gain β is evaluated across the measured collector-current range."
            }
          ],
          "links": [],
          "figureHeading": "Wafer Fabrication and Device Testing",
          "figureLayout": "showcase",
          "category": "Device fabrication",
          "shortTitle": "Cleanroom fabrication",
          "tags": [
            "Five-mask process",
            "Probe station",
            "I–V / C–V"
          ],
          "insight": "The wafer and microscope images show the physical process outcome; electrical curves add a different check by connecting device structures to measured behavior.",
          "metrics": [
            [
              "5 masks",
              "Cleanroom process"
            ],
            [
              "14 devices",
              "Fabricated devices tested"
            ],
            [
              "~135–194",
              "BJT gain in characterization exercise"
            ]
          ],
          "primary": [
            0,
            1,
            2
          ],
          "diagram": null
        },
        {
          "id": "cmos-chip",
          "title": "SKY130 CMOS Layout and Test-Chip Design",
          "course": "ECE 482 · Fall 2026",
          "summary": "Transistor-level SKY130 design progresses from a verified AOI321 gate and extracted MUX to a ring-oscillator test chip for comparing hot-carrier stress waveforms.",
          "design": [
            "Transistor sizing and Euler ordering guide AOI321 layout and 88-transition timing analysis. DRC/LVS and parasitic-capacitance extraction connect the drawn layout to functional HSPICE checks of all four MUX select states.",
            "A 21-stage baseline ring oscillator is selected using inverter-delay estimates and simulated at 768.8 MHz against a 750 MHz ±10% target. Programmable-load and asymmetric-slew structures extend the comparison; an output divider targets ≤50 MHz off chip."
          ],
          "results": "AOI321 passed DRC/LVS; the MUX passed LVS and extracted functional checks. The baseline oscillator meets its simulated frequency target. Full chip integration and the output-divider implementation remain in progress.",
          "figures": [
            {
              "src": "./assets/ece482/mux-schematic-layout.png",
              "alt": "The CMOS MUX transistor schematic and physical layout side by side in Cadence Virtuoso.",
              "caption": "MUX design. The transistor schematic and routed layout are shown side by side in Virtuoso."
            },
            {
              "src": "./assets/ece482/roa-schematic-layout.png",
              "alt": "The baseline ring oscillator ROA schematic and physical layout side by side in Cadence Virtuoso.",
              "caption": "Baseline ring oscillator. ROA connects an inverter chain in a loop, with its physical layout shown alongside the schematic."
            }
          ],
          "links": [],
          "figureHeading": "From Schematic to Layout",
          "figureLayout": "wide",
          "category": "Integrated circuits",
          "shortTitle": "SKY130 CMOS test-chip design",
          "tags": [
            "Cadence Virtuoso",
            "HSPICE",
            "DRC / LVS"
          ],
          "insight": "Physical connections, device dimensions, and vias must remain consistent with the schematic throughout layout. Earlier verification reduces the need for late LVS repairs.",
          "metrics": [
            [
              "768.8 MHz",
              "Baseline RO simulation"
            ],
            [
              "21 stages",
              "Baseline ring oscillator"
            ],
            [
              "≤50 MHz",
              "Off-chip output design target"
            ]
          ],
          "primary": [
            1,
            0
          ],
          "diagram": null
        },
        {
          "id": "electronic-nose",
          "title": "STM32 Electronic Nose for Food Freshness",
          "course": "ECE 445 · Senior Design · Fall 2026",
          "summary": "A custom STM32 sensing board and PC analysis workflow use multichannel gas responses to investigate food condition and freshness.",
          "design": [
            "A divider, low-pass filter, and unity-gain buffer condition each sensing channel for the ADC. Reference-corrected firmware integrates acquisition with temperature/humidity readings, OLED feedback, and UART reporting.",
            "PC software logs samples, corrects baselines, filters spikes, and extracts peak and slope features. Standardized logistic regression supports model training and prediction; fruit-group validation examines transfer across specimens."
          ],
          "results": "The workflow integrates sensor acquisition, environmental readings, OLED output, UART logging, and classifier training. Reported classification accuracy exceeds 80% for three banana and two apple condition classes, using 50+ training samples and a separate 20+ sample test set.",
          "figures": [
            {
              "src": "./assets/ece445/assembled-board.jpg",
              "alt": "Assembled custom electronic-nose PCB with four gas sensors, STM32 circuitry, external wiring, and the rear of an OLED module.",
              "caption": "Assembled prototype. Four gas-sensing elements are mounted on the custom PCB alongside the STM32 acquisition circuitry and external connections."
            },
            {
              "src": "./assets/ece445/pcb-layout.png",
              "alt": "KiCad physical layout of the electronic-nose PCB, showing four sensor footprints, routed signals, copper fill, MCU circuitry, and connector placements.",
              "caption": "PCB layout. The four sensor channels connect to signal-conditioning and MCU circuitry, with routed connections and copper fill visible."
            },
            {
              "src": "./assets/ece445/pc-detector-interface.png",
              "alt": "Fruit Condition Detector Windows interface in its disconnected, ready-to-detect state, showing serial-port selection, four channel legends, and an empty readings table.",
              "caption": "PC acquisition interface. Serial connection, fruit selection, recording controls, channel plots, and UART readings share one window. This screenshot shows the disconnected, ready-to-detect state."
            }
          ],
          "links": [],
          "figureHeading": "Analog Front End",
          "figureLayout": "wide",
          "category": "Embedded sensing",
          "shortTitle": "STM32 electronic nose",
          "tags": [
            "Custom PCB",
            "STM32",
            "Feature-based classification"
          ],
          "insight": "Baseline correction and repeatable sampling connect the analog hardware to useful features. A separate test set checks prediction beyond the samples used for training.",
          "metrics": [
            [
              ">80%",
              "Reported classification accuracy"
            ],
            [
              "50+ / 20+",
              "Training / separate test samples"
            ],
            [
              "3 banana / 2 apple",
              "Food-condition classes"
            ]
          ],
          "primary": [
            0,
            1,
            2
          ],
          "diagram": "./assets/diagrams/enose-workflow.svg",
          "printPrimary": [
            0
          ],
          "printSupplement": [
            1,
            2
          ],
          "printSupplementTitle": "PCB layout & acquisition software",
          "printSupplementSummary": "The board layout and Windows application document the hardware-to-software workflow. The application screenshot shows its initial interface before serial acquisition begins."
        }
      ]
    }
  ],
  "edition": "November 2026",
  "email": "zhenyuz6@illinois.edu",
  "url": "https://zhenyuz6.github.io/portfolio/"
};
