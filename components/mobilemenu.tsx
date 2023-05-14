import React from "react";
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-52 absolute top-8 left-0 py-5 felx-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4 items-start">
        <div className="px-3 text-white text-center hover:underline">Home</div>
        <div className="px-3 text-white text-center hover:underline">Movies</div>
        <div className="px-3 text-white text-center hover:underline">Series</div>
        <div className="px-3 text-white text-center hover:underline">Anime</div>
        <div className="px-3 text-white text-center hover:underline">New & Popular</div>
        <div className="px-3 text-white text-center hover:underline">Browse by language</div>
        <div className="px-3 text-white text-center hover:underline">Favourites</div>
      </div>
    </div>
  );
};

export default MobileMenu;