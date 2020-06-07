import React from "react";
import Container from "./container";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
          <Link href="/">
            <a className="hover:underline">Blog TOPへ戻る</a>
          </Link>
        </h2>
        <div className="mb-20"></div>
      </Container>
    </footer>
  );
};

export default Footer;
