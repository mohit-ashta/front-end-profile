import { PrimaryButton } from "@/components/atoms/primary_button";
import React from "react";

export const TabsData = () => {
  return (
    <div>
      <section className="py-[80px] lg:py-[100px] bg-[#141414]">
        <div className="container text-white">
          <div>
            <div className="col-span-12 lg:col-span-5 2xl:col-span-4 aos-init aos-animate">
              <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                <div className="text-center mb-10">
                  <span className="text-[40px]">
                    Curriculum Vitae <div className="separater"></div>
                  </span>
                </div>
                <h2 className="text-[50px] my-4 font-medium ">
                  Discover all my contact information conveniently located in
                  one place! Explore further details and get in touch
                  effortlessly.
                </h2>
              </div>
              <div className="flex gap-10 my-3">
                <PrimaryButton btn_text="About" />
                <PrimaryButton btn_text="Experience" />
                <PrimaryButton btn_text="Education" />
                <PrimaryButton btn_text="Skills" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 2xl:col-span-8 aos-init aos-animate">
              <div className="grid grid-cols-1">
                <h4 className="text-2xl lg:text-[32px] font-Syne mb-6">
                  Based in India
                </h4>
                <p className="paragraph mb-7 ">
                  Mohit ,<span className=""> web Developer</span>{" "}
                  Situated in India, my mission is to craft impactful words that
                  resonate deeply with your audience, drawing them in and
                  leaving them eager for more. As a wordsmith dedicated to
                  creating captivating copy, I strive to connect with readers on
                  a profound level, compelling them to engage with your message
                  and delve deeper into what you have to offer. Let s
                  collaborate to ignite curiosity and spark lasting connections
                  through the power of language.
                </p>

                <ul className="grid grid-cols-3 gap-3 inline-flex">
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Name
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Mohit
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Nationality
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      India
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Phone
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      +91 94173-85308
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Email
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      mohit.ashta@icloud.com
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Experience
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      1.9+ years
                    </span>
                  </li>
                  {/* <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Freelance
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Available
                    </span>
                  </li> */}
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Instagram
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      @suniyara__
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Language
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Punjabi, Hindi , English
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
