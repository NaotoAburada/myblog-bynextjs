import React from "react";
import Link from "next/link";
import Avatar from "./avatar";

const Intro: React.FC = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        ラブライバーのブログ
      </h1>
      <Link as={`/profile`} href="/profile">
        <a className="hover:underline">
          <Avatar
            name="Naoto Aburada Profile"
            picture="/assets/blog/profile/cd12a.jpeg"
          />
        </a>
      </Link>
    </section>
  );
};

export default Intro;
