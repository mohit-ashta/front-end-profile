import Link from "next/link";
import React, { ReactNode } from "react";
import { Url } from "url";

interface ContactInfoProps {
  title: string;
  icon: ReactNode; // ReactNode can be any valid React child
  linkto?: Url;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, icon, linkto }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      {/* <Link href={linkto}>{title}</Link> */}
    </div>
  );
};

export default ContactInfo;
