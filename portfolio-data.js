// Project content and figure paths. Edit this file to update the portfolio.
const portfolio = {
  "name": "Zhenyu Zhang",
  "affiliation": "Electrical Engineering · University of Illinois Urbana-Champaign",
  "biography": "Electrical engineering projects spanning RF measurement, nanomaterials, circuit design, embedded systems, autonomous vehicles, and language models.",
  "links": [],
  "groups": [
    {
      "id": "research",
      "title": "Research",
      "projects": [
        {
          "id": "nmr-nqr",
          "title": "NMR/NQR Instrumentation and Pulse Calibration",
          "summary": "An experimental RF platform for exciting and measuring crystal samples. The work connects custom probe circuitry and voltage-controlled tuning with instrument automation and pulsed SpinCore acquisition.",
          "design": [
            "An induction coil and varactor-based matching network tune the probe electrically. LabVIEW and GPIB automate instrument control, while temperature and magnetic-field settings provide additional experimental variables.",
            "Nutation measurements sweep pulse width to calibrate spin rotation. The pulsed setup then varies pulse separation and acquisition bandwidth to investigate two-pulse signals and receiver transients."
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
              "caption": "RF tuning. The network analyzer provides a view of the probe response during impedance matching.",
              "print": false
            },
            {
              "src": "./assets/nmr/lock-in-readout.jpg",
              "alt": "Lock-in amplifiers and a capacitance bridge in the laboratory instrument rack.",
              "caption": "Measurement instruments. Lock-in amplifiers and a capacitance bridge support the laboratory readout.",
              "print": false
            },
            {
              "src": "./assets/nmr/two-pulse-acquisition.png",
              "alt": "SpinCore two-pulse NMR and NQR interface with 29.928 MHz excitation, 23 and 47 microsecond pulses, and a time-domain acquisition trace.",
              "caption": "Two-pulse acquisition near 29.928 MHz. The early transient and later signal are being investigated as part of echo validation.",
              "wide": true
            },
            {
              "src": "./assets/nmr/labview-acquisition.jpg",
              "alt": "LabVIEW measurement plots displayed on the laboratory computer.",
              "caption": "Acquisition software. LabVIEW displays the measured response as experiment settings are varied.",
              "print": false,
              "wide": true
            }
          ],
          "links": [],
          "course": "Research · 2024–present",
          "figureHeading": "RF Instrumentation and Acquisition",
          "figureLayout": "showcase"
        },
        {
          "id": "cnt",
          "title": "3D Printing with Carbon Nanotube Inks",
          "summary": "From nanotube ink to printed structures, this project connects materials formulation, programmed deposition, microscopy, and electrical testing. A parallel nickel-plating study examines the connections between CNT specimens and metal contacts.",
          "design": [
            "SDS/SDOC formulations and rheological measurements guide the ink and printing conditions. Printer-control code adjusts motion for the sample. Dimensional measurements track the printed geometry, and SEM provides a complementary view of CNT microstructure.",
            "Mass and dimensional measurements track drying and densification. Pulsed nickel deposition then introduces another process variable. Four-probe measurements of the middle section are compared with terminal resistance to examine both the specimen and its end connections."
          ],
          "results": "The printing process retained approximately 60% of its printed area after drying and increased density by approximately 20% over baseline. Nickel-plating trials showed increased terminal resistance, prompting further examination of deposition and contact behavior.",
          "figures": [
            {
              "src": "./assets/cnt/printing-demo.jpg",
              "alt": "The laboratory 3D printer with its red print head above the deposition stage.",
              "caption": "Programmed deposition. A frame from the CNT printing demonstration shows the print head and deposition platform."
            },
            {
              "src": "./assets/cnt/printed-specimens.jpg",
              "alt": "Two dark CNT specimens on substrates in separate sample dishes.",
              "caption": "Printed specimens. Samples are prepared for dimensional and electrical characterization.",
              "print": false
            },
            {
              "src": "./assets/cnt/sem-microstructure.jpg",
              "alt": "SEM micrograph of a textured CNT structure with a two-micrometer scale bar.",
              "caption": "SEM inspection. The microstructure is shown with the original 2 µm scale bar."
            },
            {
              "src": "./assets/cnt/electroplating-cell.jpg",
              "alt": "An electroplating cell with electrical leads attached to the sample and electrodes.",
              "caption": "Electrical interfaces. The plating cell connects the sample and electrodes for pulsed nickel deposition.",
              "print": false
            },
            {
              "src": "./assets/cnt/pulse-configuration.jpg",
              "alt": "The instrument settings for a 15-milliamp charge step and rest sequence.",
              "caption": "Pulse configuration. A 0.1 s deposition step followed by 9.9 s of rest defines a 1% duty cycle.",
              "print": false
            },
            {
              "src": "./assets/cnt/terminal-resistance.png",
              "alt": "Terminal resistance of two CNT samples at zero, twelve, and 26.66 hours of nickel plating.",
              "caption": "Terminal resistance increased for both samples under the tested 15 mA, 1% duty-cycle plating condition.",
              "wide": true
            }
          ],
          "links": [],
          "course": "Research · 2025–present",
          "figureHeading": "Printing, Microstructure, and Electrical Interfaces",
          "figureLayout": "showcase"
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
          "summary": "A ROS 2 racing stack for a 1:10-scale F1TENTH car. The project compares map-free LiDAR gap following with waypoint-based pure pursuit in simulation and on the physical car.",
          "design": [
            "The reactive controller expands LiDAR obstacle boundaries to account for vehicle width, then scores open gaps and steers toward the best one. Odometry recorded during a reactive run is resampled into waypoints with heading, curvature, and target speed.",
            "Pure pursuit projects the current pose onto the raceline and chooses a lookahead point based on speed. It interpolates waypoint speeds while a LiDAR time-to-collision check can slow or stop the car. A joystick enable gates motion on hardware."
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
          "figureLayout": "featured"
        },
        {
          "id": "android-video",
          "title": "Real-Time Foreground Segmentation for Android",
          "course": "ECE 420 · Spring 2026",
          "summary": "An Android camera app isolates a foreground subject and displays its bounding box and binary mask alongside the live preview. The mask can also keep the subject sharp while blurring the background.",
          "design": [
            "OpenCV processes each frame at 320 × 240. It combines motion from MOG2 background subtraction with Lab color contrast and a Gaussian weight centered on the previous detection. The resulting mask provides a bounding box for the candidate foreground.",
            "A background thread runs PyTorch Lite on a 256 × 256 crop of that region. The preview keeps updating using the latest available mask while inference runs. For background blur, the app uses the mask to copy sharp foreground pixels back onto a Gaussian-blurred frame."
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
          "results": "The refined masks scored 0.764–0.897 intersection over union against manual annotations across three test scenarios. Camera shake and changes in lighting remained sources of segmentation errors.",
          "links": []
        },
        {
          "id": "fpga-game",
          "title": "Wizard of Wor Arcade on FPGA",
          "course": "ECE 385 · Fall 2025",
          "summary": "A two-player recreation of Wizard of Wor on the Urbana FPGA board. Players share a USB keyboard to navigate four mazes, fire lasers, and compete for the higher score.",
          "design": [
            "A MicroBlaze soft processor runs the game logic in C. A frame-driven state machine handles level transitions, while tile checks and bounding-box tests resolve wall and laser collisions. The monster pursues the nearest active player using Manhattan distance.",
            "The software writes positions and attributes to six 32-bit sprite registers over AXI4-Lite. A SystemVerilog pipeline combines maze tiles stored in block RAM with ROM-based sprites at 640 × 480. A fixed priority resolves overlapping sprites. A programmable counter generates square-wave music and sound effects."
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
          "links": []
        },
        {
          "id": "llm",
          "title": "Language Model Construction, Training, and Serving",
          "course": "ECE 498JH · Fall 2026",
          "summary": "A PyTorch language-model workflow spanning Transformer components, attention benchmarks, Qwen3-0.6B post-training, and inference scheduling.",
          "design": [
            "Transformer outputs are checked against a reference implementation before benchmarking attention memory use and throughput. Supervised fine-tuning and GRPO provide the starting model for a controlled DPO/SimPO comparison using the same preference pairs.",
            "SimPO uses length-normalized completion scores and a reward margin. Evaluation checks strict GSM8K accuracy, answer formatting, and paired judge preferences. Serving experiments compare FCFS and SJF scheduling and vary the number of decode passes between scheduler calls."
          ],
          "results": "DPO-B reached 55.80% strict accuracy and matched-rate SimPO reached 55.57%. SimPO used 24.1 GiB peak allocated GPU memory versus DPO-B's 26.9 GiB. Serving tests also exposed a latency trade-off as more decode passes delayed new requests.",
          "figures": [
            {
              "src": "./assets/llm/gsm8k-comparison.png",
              "alt": "Strict GSM8K accuracy for the GRPO checkpoint, DPO-B, and SimPO at two learning rates.",
              "caption": "GSM8K evaluation on 1,319 test questions. The higher SimPO learning rate reduced strict accuracy despite improving training-pair ranking."
            }
          ],
          "links": [],
          "figureHeading": "Preference-Tuning Results",
          "figureLayout": "wide"
        },
        {
          "id": "semiconductor-fab",
          "title": "Semiconductor Fabrication and Device Characterization",
          "course": "ECE 444 · Fall 2026",
          "summary": "A five-mask cleanroom process connects wafer preparation, device formation, and metallization with electrical testing at a probe station.",
          "design": [
            "The process combines wafer cleaning, oxidation, photoresist patterning, etching, and dopant diffusion. Each mask defines a different part of the device structures as processing proceeds toward metal contacts.",
            "Probe-station I–V and C–V measurements connect fabrication to device behavior. Characterization exercises extract diode parameters, BJT current gain, and MOSFET threshold voltage from measured curves."
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
              "caption": "Microscope inspection. Device features and contact pads are examined before electrical testing.",
              "print": false
            },
            {
              "src": "./assets/ece444/bjt-current-gain.png",
              "alt": "Measured BJT current gain beta as a function of collector current from the device characterization report.",
              "caption": "BJT characterization exercise. Current gain β is evaluated across the measured collector-current range.",
              "wide": true
            }
          ],
          "links": [],
          "figureHeading": "Wafer Fabrication and Device Testing",
          "figureLayout": "showcase"
        },
        {
          "id": "cmos-chip",
          "title": "SKY130 CMOS Layout and Test-Chip Design",
          "course": "ECE 482 · Fall 2026",
          "summary": "Transistor-level design and verification in SKY130, progressing from an AOI321 logic gate to components for a ring-oscillator test chip.",
          "design": [
            "The AOI321 design connects transistor sizing and Euler ordering with Cadence layout, DRC/LVS, and HSPICE timing analysis over 88 valid output transitions. The chip's MUX has also been checked with an extracted netlist that includes parasitic capacitance.",
            "The ongoing test chip compares three ring-oscillator structures for hot-carrier aging characterization. Programmable loading and an output divider support the design goal of an off-chip frequency at or below 50 MHz."
          ],
          "results": "The AOI321 passed DRC/LVS. The MUX passed LVS and its four selection states were verified after parasitic-capacitance extraction. ROA now has schematic and layout views, with full oscillator-chip integration still in progress.",
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
            },
            {
              "src": "./assets/ece482/mux-selection.png",
              "alt": "Sampled output voltages for all four select states of the extracted CMOS MUX.",
              "caption": "Existing HSPICE functional-test results after C-only extraction. State 00 selects ground. High-level samples for states 01, 10, and 11 are approximately 1.76–1.77 V.",
              "print": false
            }
          ],
          "links": [],
          "figureHeading": "From Schematic to Layout",
          "figureLayout": "wide"
        },
        {
          "id": "electronic-nose",
          "title": "STM32 Electronic Nose for Food Freshness",
          "course": "ECE 445 · Senior Design · Fall 2026",
          "summary": "A custom sensing PCB and PC analysis workflow for studying food freshness through gas-sensor response patterns.",
          "design": [
            "The analog front end scales and filters sensor signals before buffering them into the STM32 ADC. Firmware uses the internal reference to estimate the ADC supply, reads temperature and humidity over I²C, and provides OLED and UART output.",
            "PC tools collect sensor records and prepare response features. The classification code uses baseline correction, spike filtering, peak and slope features, and standardized logistic regression. Fruit-group validation checks whether a model transfers across specimens."
          ],
          "results": "Sensor acquisition, environmental readings, OLED output, and UART reporting are implemented. The supplied PC tools extend the workflow to logging, feature extraction, training, and prediction.",
          "figures": [
            {
              "src": "./assets/ece445/analog-front-end.png",
              "alt": "Gas sensor signal entering a resistor divider, filter capacitor, unity-gain buffer, and STM32 ADC.",
              "caption": "One sensing channel from the design report. The divider, low-pass filter, and buffer condition the signal before ADC conversion."
            }
          ],
          "links": [],
          "figureHeading": "Analog Front End",
          "figureLayout": "wide"
        }
      ]
    }
  ]
};
