import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../../assets/images/card.jpg";
import "swiper/css";
import "swiper/css/pagination";
import CardContent from "../CardContent/CardContent";

const testimonials = [
  {
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Wade Warren",
    email: "wade.warren@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Courtney Henry",
    email: "wade.warren@example.com",
    img: img,

    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Devon Lane",
    email: "devon.lane@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Darlene Robertson",
    email: "darlene.robertson@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Cody Fisher1",
    email: "cody.fisher@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Cody Fisher2",
    email: "cody.fisher@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Wade Warren",
    email: "wade.warren@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Courtney Henry",
    email: "wade.warren@example.com",
    img: img,

    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Wade Warren",
    email: "wade.warren@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Courtney Henry",
    email: "wade.warren@example.com",
    img: img,

    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
  {
    name: "Wade Warren",
    email: "wade.warren@example.com",
    img: img,
    text: "Lorem ipsum dolor sit amet consectetur. Tempus cras lacus quis pellentesque. Et et eu gravida tristique accumsan quis tristique. Tortor nisl a volutpat dui morbi semper egestas aenean ante. Morbi libero mattis libero sagittis semper nulla neque tellus. Rhoncus massa sagittis ut duis porttitor quis tellus.",
  },
  {
    name: "Courtney Henry",
    email: "wade.warren@example.com",
    img: img,

    text: "Lorem ipsum dolor sit amet consectetur. Consequat non pharetra tincidunt volutpat dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisi.",
  },
];

// ✅ Slide Groups: unique groups of 3 cards each
const slideGroups = [];
for (let i = 0; i < testimonials.length; i += 3) {
  slideGroups.push(testimonials.slice(i, i + 3));
}

// ✅ Main Component
export default function TestimonialsSlider() {
  return (
    <>
      <div className="lg:max-w-[1440px] w-full mx-auto">
        <div className=" bg-[#FEFAF6] py-[40px] px-[20px] md:py-[60px] md:px-[80px] lg:py-[80px] lg:px-[120px] ">
          <CardContent label="testimonials" align="center" />
          <h2
            className={`text-3xl md:text-[40px] mt-[16px] font-medium  mx-auto text-black max-w-xl text-center leading-[52.8px] tracking-[0px] `}
          >
            Trusted by high-growth startups across industries
          </h2>
        </div>
        <div className="relative  lg:px-[120px] px-[20px] md:px-[80px]  bg-[#FEFAF6]">
          {/* Top Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-[146px] bg-gradient-to-b from-[#FEFAF6] to-transparent z-10 pointer-events-none" />

          <div className="block lg:hidden">
            <Swiper
              direction="vertical"
              slidesPerView={4}
              spaceBetween={12}
              className="h-[950px]"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={`mobile-${idx}`} className="h-auto">
                  <div className="h-full flex flex-col justify-between rounded-[24px] border border-[#FE6037] p-[20px] bg-white shadow-sm">
                    <div className="flex items-center gap-[16px]">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-[48px] h-[48px] rounded-full object-cover border-4 border-[#FAEBDC]"
                      />
                      <div>
                        <div className="font-semibold text-[#252B37]">
                          {t.name}
                        </div>
                        <div className="text-[#A4A7AE] text-sm">{t.email}</div>
                      </div>
                    </div>
                    <p className="text-[#595959] mt-4 text-sm leading-[130%] text-left flex-grow">
                      {t.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:block">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={6}
              className="h-[900px]"
              touchReleaseOnEdges={true} // ✅ swipe sirf touch/drag pe chalega
              mousewheel={false}
            >
              {slideGroups.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-3 gap-6 items-start mb-6">
                    {group.map((t, i) => (
                      <div
                        key={i}
                        className="rounded-[24px] border border-[#FE6037] p-[30px] bg-white shadow-sm"
                      >
                        <div className="flex items-center gap-[16px]">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="w-[48px] h-[48px] rounded-full object-cover border-4 border-[#FAEBDC]"
                          />
                          <div className="text-left">
                            <div className="font-semibold text-[#252B37] text-base leading-[24px]">
                              {t.name}
                            </div>
                            <div className="text-[#A4A7AE] text-sm leading-[20px]">
                              {t.email}
                            </div>
                          </div>
                        </div>
                        <p className="text-[#595959] mt-4 text-sm leading-[130%] text-left">
                          {t.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[149px] bg-gradient-to-t from-[#FEFAF6] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </>
  );
}
