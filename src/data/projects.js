export const projectsByTenure = [
  {
    tenure: '2024/25',
    projects: [
      {
        id: 1,
        name: 'Landslide Detector',
        subtitle: 'Early Warning Seismic Monitoring System',
        category: 'IoT / Safety',
        description:
          'A real-time landslide early-warning system using soil moisture and gyroscope sensors. Alerts nearby communities before displacement occurs. Competed at IEEE SSCS Arduino Contest 2024, winning 3rd place in High School Teams.',
        tech: ['ESP32', 'Soil Moisture Sensor', 'MPU-6050', 'GSM Alert'],
        status: 'IEEE SSCS 2024 — 3rd Place',
        colorA: '#1a2f1a',
        colorB: '#0d1f0d',
        accent: '#22C55E',
      },
      {
        id: 2,
        name: 'Palm Pilot',
        subtitle: 'Gesture-Controlled Robotic Interface',
        category: 'Human-Robot Interaction',
        description:
          'A glove-based gesture control system that translates hand movements into real-time robot commands using flex sensors and an IMU. No buttons, no joystick — just your hand. Awarded 2nd Place at the Orbit International Engineering Expo Project Demo.',
        tech: ['Flex Sensors', 'MPU-6050', 'Arduino Nano', 'RF Communication', 'Servo Arm'],
        status: 'Orbit Expo 2024 — 2nd Place',
        colorA: '#1e3a5f',
        colorB: '#0f2544',
        accent: '#3B82F6',
      },
      {
        id: 3,
        name: 'Organ Perfusion System',
        subtitle: 'Automated Organ Transport & Preservation',
        category: 'Biomedical Engineering',
        description:
          'An automated system to maintain optimal temperature and pressure for organ transport. Designed to extend organ viability windows in low-resource settings. Placed 2nd at Aarambha Project Demo.',
        tech: ['PID Control', 'DS18B20', 'Peristaltic Pump', 'Arduino UNO', 'LED Display'],
        status: 'Aarambha 2024 — 2nd Place',
        colorA: '#3b1f5e',
        colorB: '#220d40',
        accent: '#8B5CF6',
      },
      {
        id: 4,
        name: 'Braille Reader',
        subtitle: 'Tactile Text-to-Braille Converter',
        category: 'Assistive Technology',
        description:
          'Converts printed or digital text into refreshable Braille output using solenoid-actuated pins. Built to support visually impaired students in Nepali schools. Featured at SET Exhibition, 2025.',
        tech: ['Solenoids', 'Arduino', 'OCR Module', 'Python', 'Serial Comm'],
        status: 'Showcased — SET Exhibition',
        colorA: '#1f2937',
        colorB: '#111827',
        accent: '#F59E0B',
      },
    ],
  },
  {
    tenure: '2025/26',
    projects: [
      {
        id: 5,
        name: 'Vision Drive',
        subtitle: 'Computer Vision Autonomous Navigation',
        category: 'Computer Vision',
        description:
          'An autonomous vehicle that navigates using a camera and real-time object detection — no GPS, no lidar. Trained on a custom Nepali road dataset. Won the KU AI Conclave Project Demo against university-level teams.',
        tech: ['Raspberry Pi', 'YOLOv8', 'OpenCV', 'PWM Motor Control', 'Python'],
        status: 'KU AI Conclave — Winner',
        colorA: '#064e3b',
        colorB: '#022c22',
        accent: '#06B6D4',
      },
      {
        id: 6,
        name: 'No Hands No Problem',
        subtitle: 'EMG-Controlled Prosthetic Arm',
        category: 'Biomedical / Prosthetics',
        description:
          'An affordable EMG-driven prosthetic arm that reads muscle signals from the forearm to control finger movements. Targeted at amputees in Nepal who cannot access commercial prosthetics. Uses 3D-printed structure and off-the-shelf sensors.',
        tech: ['EMG Sensors', 'Arduino', 'MG90S Servos', '3D Printed', 'Signal Filtering'],
        status: 'Active development',
        colorA: '#2d1515',
        colorB: '#1a0a0a',
        accent: '#EF4444',
      },
      {
        id: 7,
        name: 'Bionic Arm',
        subtitle: 'Multi-DOF Robotic Manipulator',
        category: 'Robotics',
        description:
          'A 5-DOF robotic arm with force feedback, designed for precision pick-and-place operations. Controllable via joystick or mirrored glove input. Built to demonstrate collaborative robotics concepts at school level.',
        tech: ['Arduino Mega', 'MG996R Servos', 'Potentiometers', 'Force Sensor', 'Fusion 360'],
        status: 'Demonstrated — SET Exhibition',
        colorA: '#1e3a5f',
        colorB: '#142a45',
        accent: '#3B82F6',
      },
      {
        id: 8,
        name: 'Sign Language Detector',
        subtitle: 'Real-Time ASL Recognition System',
        category: 'Computer Vision / ML',
        description:
          'A camera-based system that recognizes American Sign Language (ASL) hand signs in real time using a CNN trained on a curated gesture dataset. Converts signs to text and speech output. Awarded 2nd Place at the IEEE SSCS Arduino Contest 2025.',
        tech: ['Raspberry Pi', 'TensorFlow Lite', 'OpenCV', 'TTS Engine', 'CNN'],
        status: 'IEEE SSCS 2025 — 2nd Place',
        colorA: '#1e1b4b',
        colorB: '#12103a',
        accent: '#6366F1',
      },
      {
        id: 9,
        name: 'Line Following Car',
        subtitle: 'PID-Controlled Autonomous Racer',
        category: 'Autonomous',
        description:
          'A compact line-following robot using a PID-tuned 5-sensor IR array. Designed for WRO-format tracks, capable of handling sharp curves and junction decisions. Used as the club\'s primary training platform for new members.',
        tech: ['ATmega328P', 'IR Array', 'PID Control', 'L298N', 'Custom PCB'],
        status: 'Active — training platform',
        colorA: '#1a2f1a',
        colorB: '#0d1f0d',
        accent: '#22C55E',
      },
      {
        id: 10,
        name: 'Smart Evacuation System',
        subtitle: 'IoT Fire & Hazard Response Network',
        category: 'IoT / Safety',
        description:
          'A building-wide sensor network that detects fire, gas leaks, and smoke, then activates directional LED evacuation guides and sends automated alerts. Designed for schools and public buildings in Nepal. Demonstrated at Locus 2026.',
        tech: ['ESP32 Mesh', 'MQ-2', 'DHT22', 'WS2812 LEDs', 'MQTT', 'Telegram Bot'],
        status: 'Locus 2026 — Secondary Level Award',
        colorA: '#2d1515',
        colorB: '#1a0a0a',
        accent: '#F59E0B',
      },
      {
        id: 11,
        name: 'RC Plane',
        subtitle: 'Hand-Built Fixed-Wing Aircraft',
        category: 'Aerospace',
        description:
          'A fully scratch-built remote-controlled fixed-wing aircraft with foam-board airframe, custom ESC tuning, and a 4-channel radio system. One of the more ambitious builds — getting the center of gravity right took three crash landings. Currently cleared for stable flight.',
        tech: ['Brushless Motor', 'ESC', 'Servo Linkages', 'FPV Camera', 'FlySky Radio'],
        status: 'Flight certified',
        colorA: '#08090F',
        colorB: '#0D1117',
        accent: '#94A3B8',
      },
    ],
  },
];

// Flat list for simple rendering
export const projects = projectsByTenure.flatMap(t => t.projects);
