import { Award, Briefcase, Code, Target } from 'lucide-react';
import React from 'react';

export const about =
  "Changia was formed in 2023 in response to the founders' struggle to find volunteering opportunities during their university's Community-based Learning period. Realizing the difficulty of finding suitable establishments, they decided to create a platform to facilitate community engagement. Their primary goals included enlisting and verifying children's homes in Nairobi, showcasing their needs to potential donors, and making the process of giving back easier for everyone. With the support of their friends, they formed a dedicated team and developed a comprehensive product aimed at creating a meaningful impact. They welcome questions, ideas, feedback, or simply a friendly greeting from users of their platform.";

export const principles = [
  {
    icon: React.createElement(Target, {
      className: 'h-6 w-6 text-[#e78124] mr-2',
    }),
    title: 'Our Mission',
    paragraph:
      'Our mission is to empower people to make a difference in the world. We do this by providing resources and support to individuals and organizations who are working to make the world a better place. We believe that everyone has the power to make a difference, and we are committed to helping people to realize their potential. We believe that by working together, we can create a more just, equitable, and sustainable world.',
  },
  {
    icon: React.createElement(Award, {
      className: 'h-6 w-6 text-[#e78124] mr-2',
    }),
    title: 'Our Vision',
    paragraph:
      'A Kenya where every child, regardless of their background has the opportunity to thrive, learn, and contribute positively to their communities and the nation at large.',
  },
];

export const team = [
  {
    image: '',
    name: 'Kennedy Macharia',
    title: 'Business Lead',
    icon: React.createElement(Briefcase, {
      className: 'h-4 w-4',
    }),
  },
  {
    link: 'https://githuba.netlify.app',
    image: '',
    name: 'Richard Jeremy Githuba',
    title: 'Developer',
    icon: React.createElement(Code, {
      className: 'h-4 w-4',
    }),
  },
];

export const journey = [
  {
    value: '2024',
    title: '2024: The Beginning',
    description:
      'Changia is founded in Nairobi, Kenya, by John Doe and Jane Smith with a vision to transform the lives of underprivileged children.',
  },
  {
    value: '2024-Q2',
    title: '2024 Q2: First Program Launch',
    description:
      "We launch our first educational support program in Kibera, Nairobi's largest informal settlement.",
  },
  {
    value: '2024-Q3',
    title: '2024 Q3: Expanding Our Reach',
    description:
      'Our team grows as we bring on board local volunteers and expand our programs to two more communities in Nairobi.',
  },
  {
    value: '2024-Q4',
    title: '2024 Q4: First Milestone',
    description:
      'We celebrate supporting over 100 children with access to education and basic healthcare in our first year of operation.',
  },
  {
    value: '2025',
    title: '2025: Looking Ahead',
    description:
      'With a successful first year behind us, we set ambitious goals to double our impact and expand to rural areas of Kenya.',
  },
];
