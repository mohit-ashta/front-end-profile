import React from "react";

// Define a TypeScript interface for props
interface IndexProps {
  btn_text: string;
}

export const PrimaryButton: React.FC<IndexProps> = ({ btn_text }) => {
  return (
    <div className="btn_wrapper relative pointer text-lg px-2 h-10">
      <div>
        <button className="pointer">{btn_text}</button>
      </div>
    </div>
  );
};
