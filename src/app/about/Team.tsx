"use client";
import React from "react";
import Image from "next/image";
import XSocial from "@/assets/icons/x-social.svg";
import TeamMemberImage from "@/assets/images/teammember.png";
import type { StaticImageData } from "next/image";



type Member = {
  name: string;
  role: string;
  link?: string;
  image: StaticImageData;
};

const teamMembers: Member[] = [
  {
    name: "Sarah Barnekow",
    role: "CEO & Co-founder",
    link: "https://x.com/",
    image: TeamMemberImage
  },
  {
    name: "Alex Suevalov",
    role: "Tech Lead",
    link: "https://x.com/",
    image: TeamMemberImage
  },
  {
    name: 'Mark Lamprecht',
    role: 'Software Engineer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Scott Bailey',
    role: 'Software Engineer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Vedant Hegde',
    role: 'Customer Experience',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Lucy Radux',
    role: 'Marketing Manager',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Devani Janssen',
    role: 'Product Design',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Dima Trystram',
    role: 'Customer Success',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Fraser Davidson',
    role: 'Customer Success',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'William Adkins',
    role: 'Customer Experience',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Debbie Poulin',
    role: 'Head of Talent',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'James Kudinov',
    role: 'Product Design',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Zhenya Rynzhuk',
    role: 'Software Engineer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Mary Maka',
    role: 'Enterprise Architect',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Monty Hayton',
    role: 'Video Producer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Srdjan Vidakovic',
    role: 'Operations Manager',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'David Cran',
    role: 'Financial Analyst',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Jacek Janiczak',
    role: 'Data Engineer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Tommy Chandra',
    role: 'Head of Design',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
  {
    name: 'Ally Golovko',
    role: 'Software Engineer',
    link: 'https://x.com/',
    image: TeamMemberImage
  },
];


export const Team = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">We are a happy, small team</h2>
      <p className="max-w-2xl mx-auto mb-12 text-gray-300">
        Various versions of Lorem Ipsum have evolved over the years, sometimes by accident,
        sometimes on purpose, and by injecting humour and the like.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-transparent hover:border-purple-400 transition-all duration-300 ease-in-out group"
          >
            {/* Profile Image */}
            <Image
              src={member.image}
              alt={member.name}
              width={48}
              height={48}
              className="rounded-full object-cover shrink-0"
            />

            {/* Name + Role + Icon */}
            <div className="flex flex-col text-left relative w-full">
              <span className="font-semibold">{member.name}</span>
              <span className="text-purple-400 text-sm">{member.role}</span>

              {/* X Icon */}
              <div className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <XSocial className="w-5 aspect-square object-contain" />

              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Team;