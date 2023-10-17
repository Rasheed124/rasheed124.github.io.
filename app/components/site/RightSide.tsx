import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 space-y-16 text-textLight">
      <a href="mailto:noor.jsdivs@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          rashdevatrealglobe@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-20 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
