import Layout from "@/components/organisms/layout";
import { TabsData } from "@/components/organisms/tabs";
import Image from "next/image";

export const HomePageTemplate = () => {
  return (
    <Layout>
      <section className="bg-secondary relative  h-full overflow-hidden bg-[#000000]  ">
        <video autoPlay loop muted className="w-full mix-blend-luminosity">
          <source src="/videos/hero5.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className=" text-center absolute top-[50%]  text-white left-[50%] video_wrapper">
            <div className="" data-aos="fade-up" data-aos-duration="3000">
              <span className=" text-center lg:text-[32px] text-[22px]">
                Hello World , I’m
              </span>
              <h1
                className="font-bold lg:leading-[4.5rem] leading-[2.5rem] lg:text-[60px] text-[30px]"
                id="spin"
              ></h1>
              <p className="text-black-700 font-bold text-lg md:text-xl xl:text-2xl ">
                Explore further details and get in touch effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TabsData />
    </Layout>
  );
};
