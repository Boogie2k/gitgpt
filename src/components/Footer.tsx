import React from "react";
const footer = [
  "About us",
  "Pricing",
  "Blog",
  "Terms of service",
  "Privacy policy",
];

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 px-10 sm:px-[7.5rem] pb-6">
      <p>Built with love from Lagos 💚 🇳🇬</p>

      <ul className="flex flex-grow sm:flex-row gap-6">
        {footer.map((item, index: number) => {
          return (
            <li className="underline" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
