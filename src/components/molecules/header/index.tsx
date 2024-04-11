import ContactInfo from "@/components/atoms/contact-info";
import { useRouter } from "next/router";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
export const TopHeader = () => {
  const router = useRouter();
  return (
    <div className="bg-[#141414] py-4 ">
      <div className="container ">
        <div className="flex justify-between text-white px-4 lg:px-0">
          <span className="font-bold lg:text-[22px] text-[15px]">Er. Mohit Ashta</span>
         <div className="flex items-center gap-2 lg:text-[22px] text-[15px]"> <TfiEmail size={20}/>   <span> mohit.ashta@icloud.com</span></div>
        </div>
      </div>
    </div>
  );
};
