import logo1 from "../../assets/Icons/Logoispm1.svg";
import logo2 from "../../assets/Icons/Logoispm2.svg";

import companyLogo from "../../assets/Icons/Company.svg";
import startup from "../../assets/Icons/Startup.svg";
import divider from "../../assets/Icons/Divider.svg";

export default function LogoSlider() {
  const logos = [logo1, logo2, companyLogo, startup];

  return (
    <div className="py-[2px] overflow-hidden max-w-[1250px] xxl:max-w-[1440px] mt-[30px]">
      <div className="flex w-max animate-scroll">
        {logos.concat(logos).map((logo, i, arr) => (
          <div key={i} className="flex items-center">
            <img
              src={logo}
              className="h-[38px] w-[193px] mx-8 object-contain grayscale"
            />
            {i !== arr.length - 1 && (
              <img
                src={divider}
                alt="divider"
                className="h-6 object-contain flex-shrink-0"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
