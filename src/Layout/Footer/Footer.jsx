import logo from "../../assets/Icons/Logo.svg";
import footer1 from "../../assets/Icons/footer1.svg";
import footer2 from "../../assets/Icons/footer2.svg";
import footer3 from "../../assets/Icons/footer3.svg";
import footer4 from "../../assets/Icons/footer4.svg";
export default function Footer() {
  const socialIcons = [footer1, footer2, footer3, footer4];
  return (
    <footer className="w-full bg-[#FFF9F5] py-[40px] px-[120px]">
      <div className=" ">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-24">
          {/* LEFT: logo + text */}
          <div className="max-w-[360px] shrink-0">
            <div className="flex items-center gap-2">
              <div className="">
                <img src={logo} alt="" className="w-[37px] h-[40px]" />
              </div>
              <span className="font-[400] text-2xl leading-[130%] text-[#000000] font-pragati">
                AI SALES
              </span>
            </div>

            <p className="mt-3 text-base font-normal tracking-normal text-[#595959] leading-[130%] ">
              Lorem ipsum dolor sit amet consectetur. Adipiscing egestas
              volutpat tincidunt semper et adipiscing sagittis eget nunc. Ac
              tortor sagittis condimentum adipiscing. In sit.
            </p>

            <hr className="mt-4 border-[#E9EAEB] " />
            <h3 className="font-semibold mt-5  mb-[8px] text-base  tracking-normal text-[#495467] leading-[130%]">
              Follow us:
            </h3>
            <div className="flex gap-3 mt-2">
              {socialIcons.map((icon, i) => (
                <div key={i} className=" flex items-center justify-center">
                  <img
                    src={icon}
                    alt={`social-${i}`}
                    className="w-[44px] h-[43px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 2 columns */}
          <div className="flex gap-16 md:gap-[60px]">
            {/* Company */}
            <div className="min-w-[140px]">
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-3 text-base font-normal tracking-normal text-[#595959] leading-[130%]">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Book now</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Job</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-[140px]">
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-3 text-base font-normal tracking-normal text-[#595959] leading-[130%]">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t text-[#595959] border-[#E9EAEB] pt-4  flex flex-col md:flex-row items-center justify-between text-xs font-normal leading-[180%] tracking-normal">
          <p className=" mt-[40px]">Deal View © 2025 All rights reserved.</p>
          <div className="flex gap-[52px] ">
            <a href="#">Privacy policy</a>
            <a href="#">GTC</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
