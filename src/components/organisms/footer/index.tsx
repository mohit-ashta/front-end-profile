import { TopHeader } from "@/components/molecules/header";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer bg-[#4D4D4D] pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 mb-10">
          <div className="flameWrapper w-full">
            <div className="flame text-[86px] text-center">
              FRONTEND DEVELOPER
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div className="py-9 px-7 border-border-slate-300 border rounded-2xl flex flex-col justify-between group">
            <h3 className="text-xl font-bold text-slate-300">
              Looking for a hectic designer?
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold leading-none text-slate-300 ">
                mohit.ashta@icloud.com
              </p>
            </div>
          </div>
          <div className="py-9 px-7 border-border-slate-300 border rounded-2xl flex flex-col justify-between group">
            <h3 className="text-xl font-bold text-slate-300">
              Want a more in-depth look at my history?
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold  leading-none text-slate-300 ">
                +91 94173-85308
              </p>
            </div>
          </div>
          <div>
            {" "}
            <h3 className="text-slate-300 font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              Lets toegther work
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
