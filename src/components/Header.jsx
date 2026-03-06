import React from "react";
import chefClaudeIcon from "../assets/ChefClaudeIcon.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100 shadow-sm">
      <nav className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
        <div className="flex flex-col">
          <span className="text-sm font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            ATA
          </span>
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider -mt-1">
            Abdallah Taha Abdallah
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={chefClaudeIcon}
            alt="Chef Claude"
            className="w-8 h-10 drop-shadow-sm"
          />
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-500">
            Chef ATA
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
