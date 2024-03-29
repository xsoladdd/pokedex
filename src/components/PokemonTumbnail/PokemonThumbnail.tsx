import NextImage from "next/image";
import React from "react";
interface PokemonThumbnailProps {
  img: string;
  title: string;
  // id: number;
}

const PokemonThumbnail: React.FC<PokemonThumbnailProps> = ({
  img,
  title,
  // id,
}) => {
  return (
    // <Link href={`/pokemon/${id}`} passHref>
    <div className=" flex flex-col  justify-center place-items-center rounded-lg border-gray-500 border-2 cursor-pointer">
      <div className="flex justify-center">
        <NextImage src={img} alt={title} height="120px" width="120px" />
      </div>
      <h2>{title}</h2>
    </div>
    // </Link>
  );
};
export default PokemonThumbnail;
