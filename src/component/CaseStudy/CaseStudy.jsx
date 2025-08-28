import CardContent from "../CardContent/CardContent";
import img1 from "../../assets/images/CaseStudy1.png";
import img2 from "../../assets/images/CaseStudy2.png";

export default function CaseStudies() {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section className="bg-[#fff7f5] lg:py-[80px] lg:px-[120px]  md:py-[40px] md:px-[80px] py-[40px] px-[20px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-end md:justify-between gap-6">
          <div>
            <CardContent label="Case study" align="start" />
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] text-left font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] max-w-2xl">
              Client success stories through our solutions
            </h2>
            <p className="text-[14px] sm:text-[16px] font-normal mt-3 leading-[130%] max-w-3xl ">
              Cold outreach is time-consuming and hard to scale. Writing emails,
              remembering follow-ups, and scheduling calls eats up your day.
            </p>
          </div>

          <button className=" self-start flex flex-row lg:self-auto text-[#ff5722] border border-[#ff5722] rounded-full px-6 py-2 font-medium hover:bg-[#ff5722] hover:text-white transition ">
            Explore all
          </button>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid md:grid-cols-2 xxl:gap-[170px] gap-[30px]">
          {/* Card 1 */}
          <div>
            <div className="relative rounded-[20px] w-full xxl:w-[654px] overflow-hidden">
              <img
                src={img2}
                alt="Healthcare"
                className="h-[385px] w-full xxl:w-[654px] object-cover grayscale"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(254,96,55,0)] to-[rgba(254,96,55,0.3)]"></div>
            </div>

            {/* Content outside */}
            <div className="py-4">
              <CardContent label="Healthcare" align="start" />
              <h3 className="mt-4 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-[500] text-[#242424] leading-[130%] tracking-normal">
                Making an Impact: Transforming a Healthcare Platform’s Rebuild
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className="relative rounded-[20px] w-full xxl:w-[516px] overflow-hidden">
              <img
                src={img1}
                alt="Startup"
                className="h-[385px] w-full xxl:w-[516px] object-cover grayscale"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(254,96,55,0)] to-[rgba(254,96,55,0.3)]"></div>
            </div>

            {/* Content outside */}
            <div className="py-4">
              <CardContent label="Startup" align="start" />
              <h3 className="mt-4 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-[500] text-[#242424] leading-[130%] tracking-normal">
                Optimizing Conversions: A Tech Startup’s Leap
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
