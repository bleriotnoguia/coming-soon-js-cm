"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContributorCardProps {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export default function ContributorCard({
  name,
  role,
  image,
  github,
  linkedin,
  portfolio,
}: ContributorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300",
        isHovered ? "shadow-lg scale-[1.02]" : "shadow"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-64 w-full md:h-auto md:w-1/3">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-600">{role}</p>
              <p className="mt-4 text-gray-600">
                Contributeur de la communauté JS Cameroon, passionné par le
                développement web et le partage de connaissances.
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-gray-100 p-2 transition-colors hover:bg-black"
              >
                <Github className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-gray-100 p-2 transition-colors hover:bg-blue-700"
              >
                <Linkedin className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </a>
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-gray-100 p-2 transition-colors hover:bg-yellow-500"
              >
                <Globe className="h-5 w-5 text-gray-600 transition-colors group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}