import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "@/app/_components/globalComponents/Tag";
import Link from "next/link";

const ProjectCard = ({
  name,
  img,
  tech,
  link,
}: {
  name: string;
  img: StaticImageData;
  tech: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden rounded-2xl w-full md:w-[calc(33%-0.56rem)] lg:w-[calc(33%-0.5rem)] xl:w-[calc(33%-0.45rem)] aspect-[16/9] bg-white bg-opacity-50 group/img hover:cursor-pointer ${tech} projectCard`}
    >
      <Image
        className="w-full h-full object-cover md:group-hover/img:scale-105 md:group-hover/img:blur-sm duration-200 ease-in"
        src={img}
        alt={name}
        width={600}
        height={350}
      ></Image>
      <Tag
        type="projectname"
        text={name}
        className="absolute bottom-4 left-4 md:opacity-0 md:group-hover/img:opacity-100 duration-200"
      ></Tag>
    </Link>
  );
};

export default ProjectCard;
