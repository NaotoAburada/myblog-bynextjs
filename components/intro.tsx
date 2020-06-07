import React from "react";
import Link from "next/link";
import Avatar from "./avatar";

const Intro: React.FC = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="border-8 border-l-0 border-r-0 border-orange-400 text-6xl text-orange-400 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          ラブライバーのブログ
        </h1>
        <h3 className="mb-8 text-2xl text-blue-300 md:text-2xl font-bold tracking-tighter leading-tight italic ml-6">
          An engineer who loves Love Live writes a blog
        </h3>
      </div>
      <Link as={`/profile`} href="/profile">
        <a className="hover:underline -mt-10">
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
