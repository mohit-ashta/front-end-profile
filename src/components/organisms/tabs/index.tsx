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
                <h2 className="text-[27px] my-4 font-medium ">
                  Discover all my contact information conveniently located in
                  one place! Explore further details and get in touch
                  effortlessly.
                </h2>
              </div>
              <div className="flex lg:gap-10 gap-3 my-3">
                <PrimaryButton btn_text="About" />
                <PrimaryButton btn_text="Experience" />
                <PrimaryButton btn_text="Education" />
                <PrimaryButton btn_text="Skills" />
              </div>
            </div>
            <hr className="my-4 opacity-10" />
            <div className="col-span-12 lg:col-span-7 2xl:col-span-8 aos-init aos-animate">
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-3 items-center gap-6">
                  <div className="grid grid-cols-2">
                    <span className="text-[23px]">Name</span>
                    <span className="text-[17px]">Mohit Ashta</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Name</span> <span>Mohit Ashta</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Name</span> <span>Mohit Ashta</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Name</span> <span>Mohit Ashta</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Name</span> <span>Mohit Ashta</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span>Name</span> <span>Mohit Ashta</span>
                  </div>
                </div>
                <p className="paragraph mt-7 ">
                  Mohit ,<span className=""> web Developer</span> Situated in
                  India, my mission is to craft impactful words that resonate
                  deeply with your audience, drawing them in and leaving them
                  eager for more. As a wordsmith dedicated to creating
                  captivating copy, I strive to connect with readers on a
                  profound level, compelling them to engage with your message
                  and delve deeper into what you have to offer. Let s
                  collaborate to ignite curiosity and spark lasting connections
                  through the power of language.
                </p>
                <h4 className="text-2xl lg:text-[32px] font-Syne mt-6">
                  Based in India
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
