import ContactInfo from "@/components/atoms/contact-info";
import { useRouter } from "next/router";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
export const TopHeader = () => {
  const router = useRouter();
  return (
    <div className="bg-zinc-900 hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center text-[#cc5353] py-4">
          Mohit
          <div className="flex items-center justify-between xl:w-1/2 gap-3 xl:gap-0">
            <p>Have any question?</p>
            <ContactInfo
              icon={<MdPhone color="" size={25} />}
              linkto="tel:+919417385308"
              title="+91-94173-85308"
            />
            <ContactInfo
              icon={<FaEnvelope color="#" size={25} />}
              title="mohit.ashta@icloud.com"
              linkto="mailto:mohit.ashta@icloud.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
