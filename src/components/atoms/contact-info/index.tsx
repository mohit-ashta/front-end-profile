import React, { ReactNode } from "react";

interface ContactInfoProps {
  title: string;
  icon: ReactNode; // ReactNode can be any valid React child
  linkto: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, icon, linkto }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <a href={linkto}>{title}</a>
    </div>
  );
};

export default ContactInfo;
