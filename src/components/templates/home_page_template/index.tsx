import Layout from "@/components/organisms/layout";
import { TabsData } from "@/components/organisms/tabs";
import Image from "next/image";

export const HomePageTemplate = () => {
  return (
    <Layout>
      <section className="bg-secondary relative h-[95vh] overflow-hidden bg-[#000000] ">
        <video autoPlay loop muted className="w-full mix-blend-luminosity">
          <source src="/videos/hero5.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className=" text-center absolute top-[50%] py-[229px] text-white left-[50%] video_wrapper">
            <div className="" data-aos="fade-up" data-aos-duration="3000">
              <span className=" text-center text-[32px]">
                Hello World , I’m
              </span>
              <h1
                className="font-bold leading-[4.5rem] text-[60px] "
                id="spin"
              ></h1>
              <p className="text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight my-[30px]">
                Based in India <br />
              </p>
              <p className="text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight ">
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
