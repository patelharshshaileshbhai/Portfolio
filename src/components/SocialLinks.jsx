import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import resume from "../assets/resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/harsh-patel-5435bb26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/patelharshshaileshbhai",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ph335579@gmailcom",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: resume,
    //   download: true,
    // },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://x.com/harsh_patel_03?t=EWSFvBR37sqQasn4fkqrLA&s=09",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-gray-500">
      <ul className="flex justify-around py-4">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"hover:rounded-md duration-300" + " " + style}
          >
            <a
              href={href}
              className="flex flex-col items-center text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
