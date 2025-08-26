import img1 from "../../assets/images/cta-img.png"; // tumhari image import

export default function CTASection() {
  return (
    <section className="bg-[#fff7f5] py-[40px] px-[120px]">
      <div className=" rounded-[24px] overflow-hidden">
        {/* Top Orange Section */}
        <div className="bg-[#FE6037] text-center rounded-t-[24px]">
          {/* Label */}
          <div className="py-[80px] px-[220px]">
            <span className="text-[#FE6037] bg-white text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
              Ready to elevate
            </span>

            <h2
              className={`text-3xl md:text-[40px] font-medium text-white max-w-md mx-auto text-center leading-[52.8px] tracking-[0px] `}
            >
              Proceed toward your next achievement
            </h2>
            {/* Buttons */}
            <div className="flex justify-center mt-[30px] gap-[10px]">
              <button className="text-[#FE6037] bg-white w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px]">
                Let’s talk
              </button>
              <button className="border-[#FEFAF6] border text-[#FEFAF6] w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px]">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex">
            {/* Shape 1 - Image */}
            {/* Shape 1 - Image */}
            <div className="w-[606px] h-[300px] relative overflow-hidden">
              {/* Image */}
              <img
                src={img1}
                alt="People"
                className="w-[606px] h-[300px] object-cover object-right grayscale"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(254,96,55,0)] to-[rgba(254,96,55,0.3)]"></div>
            </div>

            {/* Shape 2 - Quarter Circle + Yellow */}
            <div className="w-[300px] h-[300px] flex flex-col items-center justify-center bg-[#fe6037]">
              <div className="w-[299px] h-[149px] bg-blue-600 rounded-b-full"></div>
              <div className="w-[299px] h-[149px] bg-yellow-400 rounded-b-full"></div>
            </div>

            {/* Shape 3 - Vertical Bars */}
            <div className="w-[309px] h-[300px] flex justify-between items-center bg-[#fe6037]">
              <div className=" xxl:w-16 w-12 h-[300px] bg-gray-900"></div>
              <div className="xxl:w-16  w-12 h-[300px] bg-gray-900"></div>
              <div className="xxl:w-16  w-12 h-[300px] bg-gray-900"></div>
            </div>

            {/* Shape 4 - Half Black Circle */}
            <div className="w-[180px] h-[300px] flex items-center justify-center bg-[#fe6037]">
              <div className="w-[299px] h-[300px] bg-black rounded-l-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Shapes Section */}
      </div>
    </section>
  );
}
