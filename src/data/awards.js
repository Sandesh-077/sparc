export const awardsByTenure = [
  {
    tenure: '2024/25 Tenure',
    items: [
      {
        id: 1,
        title: 'IEEE SSCS Arduino Contest 2024 — 3rd Place',
        subtitle: 'High School Teams Category · Team LDS',
        event: 'SSCS Arduino Contest, IEEE',
        date: '2024',
        description:
          'Competed with Team LDS (Landslide Detection System) against high school teams from across World in the IEEE Solid State Circuit Society Arduino contest. Placed 3rd — a strong result for the club\'s first IEEE competition.',
        badge: 'bronze',
        type: 'award',
      },
      {
        id: 2,
        title: 'Orbit International Engineering Expo — 2nd Place',
        subtitle: 'Project Demo · Palm Pilot',
        event: 'Orbit International Engineering Expo',
        date: '2024',
        description:
          'Palm Pilot, our gesture-controlled robotic interface, earned 2nd place at the Orbit expo\'s project demo category — competing against university-level submissions.',
        badge: 'silver',
        type: 'award',
      },
      {
        id: 3,
        title: 'Aarambha — 2nd Place',
        subtitle: 'Project Demo · Organ Perfusion System',
        event: 'Aarambha',
        date: '2024',
        description:
          'The Organ Perfusion System placed 2nd at Aarambha, recognized for its biomedical engineering depth and relevance to Nepal\'s healthcare infrastructure gaps.',
        badge: 'silver',
        type: 'award',
      },
      {
        id: 4,
        title: 'Technoxian Robotics World Cup 2024',
        subtitle: 'International Participation',
        event: 'Technoxian Robotics World Cup',
        date: '2024',
        description:
          'Attended and participated in Technoxian Robotics World Cup 2024, an international robotics competition, in our founding tenure. A landmark first for the club.',
        badge: 'participation',
        type: 'event',
      },
      {
        id: 5,
        title: 'LOCUS',
        subtitle: 'National Tech Fest — Exhibition',
        event: 'LOCUS, IOE Pulchowk',
        date: '2024',
        description:
          'Exhibited at LOCUS, one of Nepal\'s largest engineering festivals hosted by IOE Pulchowk Campus. First time SPARC represented St. Xavier\'s A Levels on a national engineering stage.',
        badge: 'participation',
        type: 'event',
      },
      {
        id: 6,
        title: 'SXC SPARC Fest 2025 — Organized',
        subtitle: "Nepal's First High School Hardware Hackathon",
        event: 'SPARC Fest 2025',
        date: '2025',
        description:
          'SPARC organized and hosted SXC SPARC Fest 2025 — Nepal\'s first hardware hackathon exclusively for high school students. The club went from participant to host in under a year.',
        badge: 'gold',
        type: 'milestone',
      },
    ],
  },
  {
    tenure: '2025/26 Tenure',
    items: [
      {
        id: 7,
        title: 'KU AI Conclave — Winner',
        subtitle: 'Project Demo · Vision Drive',
        event: 'KU AI Conclave, Kathmandu University',
        date: '2025',
        description:
          'Vision Drive won the Project Demo category at KU AI Conclave against university-level teams. A clean sweep competing on computer vision and autonomous navigation.',
        badge: 'gold',
        type: 'award',
      },
      {
        id: 8,
        title: 'IEEE SSCS Arduino Contest 2025 — 2nd Place',
        subtitle: 'High School Teams Category · Sign Language Detector',
        event: 'SSCS Arduino Contest, IEEE',
        date: '2025',
        description:
          'One year after placing 3rd, SPARC returned to the IEEE SSCS contest and improved to 2nd place with the Sign Language Detector — a CNN-based real-time ASL recognition system.',
        badge: 'silver',
        type: 'award',
      },
      {
        id: 9,
        title: 'KEC Robotics Hackathon — 1st Runner Up',
        subtitle: 'Robotics Hackathon',
        event: 'KEC Robotics Hackathon',
        date: '2025',
        description:
          'Placed 1st runner up at the KEC Robotics Hackathon, continuing a streak of podium finishes in competitive engineering events.',
        badge: 'silver',
        type: 'award',
      },
      {
        id: 10,
        title: 'Locus 2026 — Secondary Level Award',
        subtitle: 'National Engineering Festival',
        event: 'LOCUS 2026, IOE Pulchowk',
        date: '2026',
        description:
          'Won the Secondary Level Award at Locus 2026 — the largest engineering fest in Nepal. Recognition at this level against university teams is a genuine milestone for a high school club.',
        badge: 'gold',
        type: 'award',
      },
      {
        id: 11,
        title: 'SET Exhibition — 1st Runner Up',
        subtitle: 'Inter-College Exhibition',
        event: 'SET Exhibition',
        date: '2026',
        description:
          'Placed first runner up at the SET Exhibition inter-college competition, demonstrating the Bionic Arm project.',
        badge: 'silver',
        type: 'award',
      },
      {
        id: 12,
        title: 'Technoxian Robotics World Cup 2025',
        subtitle: 'International Participation',
        event: 'Technoxian Robotics World Cup',
        date: '2025',
        description:
          'Returned to Technoxian Robotics World Cup for the second consecutive year, continuing international representation for St. Xavier\'s College.',
        badge: 'participation',
        type: 'event',
      },
    ],
  },
];

export const awards = awardsByTenure.flatMap(t => t.items);
export const events = [];
