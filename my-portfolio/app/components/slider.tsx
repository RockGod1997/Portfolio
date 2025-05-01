// components/Slider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Title: string = "";
const Subtitle: string = "";
const Date: string = "";

const Card = ({ title = Title, subtitle = Subtitle, date = Date }) => (
  <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg border border-gray-600 hover:shadow-2xl transition-colors duration-300 shadow-md text-center flex flex-col items-center justify-center">
    <h3 className="text-gray-100 text-lg">{title}</h3>
    {subtitle && <p className="text-gray-300 mt-2 text-sm">{subtitle}</p>}
    {date && <p className="text-gray-300 mt-2 text-sm">{date}</p>}
  </div>
);

const Slider = () => {
  const educationData = [
    {
      title: "Trinity College Dublin",
      subtitle: "MSc in Computer Science, Future Networked System",
      date: "2023 - 2024",
    },
    {
      title: "Bangalore Institute of Technology",
      subtitle: "BE in Computer Science",
      date: "2016 - 2020",
    },
  ];

  const workExperienceData = [
    {
      title: "Fidelity Investments",
      subtitle: "Software Engineer",
      date: "Jan 2025 - Present",
    },
    {
      title: "Tata Consultancy Services",
      subtitle: "Systems Engineer",
      date: "Jan 2023 - Aug 2023",
    },
    {
      title: "Accenture",
      subtitle: "Application Development Associate",
      date: "Feb 2021 - Aug 2022",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="my-10"
      >
        {/* Education Section */}
        <SwiperSlide>
          <section className="w-full">
            <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {educationData.map((edu, index) => (
                <Card key={index} {...edu} />
              ))}
            </div>
          </section>
        </SwiperSlide>

        {/* Work Experience Section */}
        <SwiperSlide>
          <section className="w-full">
            <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">
              Work Experience
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {workExperienceData.map((work, index) => (
                <Card key={index} {...work} />
              ))}
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
