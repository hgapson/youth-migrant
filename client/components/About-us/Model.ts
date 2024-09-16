// src/models.ts
export interface TeamMember {
  name: string
  position: string
  description: string
  image: string
}

export interface TeamData {
  boardMembers: TeamMember[]
  leadershipTeam: TeamMember[]
}

// Example data
export const teamData: TeamData = {
  boardMembers: [
    {
      name: 'John Doe',
      position: 'Chairman',
      description: 'John has over 20 years of experience in the industry.',
      image: '/path/to/john_doe.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Vice Chairman',
      description: 'Jane specializes in strategic planning and management.',
      image: '/path/to/jane_smith.jpg',
    },
    // Add more board members as needed
  ],
  leadershipTeam: [
    {
      name: 'Emily Johnson',
      position: 'CEO',
      description:
        'Emily is responsible for the overall operations of the company.',
      image: '/path/to/emily_johnson.jpg',
    },
    {
      name: 'Michael Brown',
      position: 'CTO',
      description: 'Michael leads the technology and innovation strategies.',
      image: '/path/to/michael_brown.jpg',
    },
    // Add more leadership team members as needed
  ],
}
