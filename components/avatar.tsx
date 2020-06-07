import React from "react";

type Props = {
  name: string;
  picture: string;
};

const Avatar: React.FC<Props> = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-16 h-16 rounded-full mr-4" alt={name} />
      <div className="text-xl">{name}</div>
    </div>
  );
};

export default Avatar;
