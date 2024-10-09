// components/Slider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    return (
        <div className="w-full"> {/* Ensures that the Slider inherits parent width */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1} // This can remain as 1 for mobile
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                className="my-10 " // Ensures Swiper takes full width
            >
                {/* Skills Section */}
                <SwiperSlide>
                <section className="w-full flex flex-col items-center" style={{zIndex:'1000'}}>
  <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Skills</h2>
  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center font-semibold items-center lg:gap-4">
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-1">JavaScript</li>
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-2">React Native</li>
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-3">Angular</li>
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-4">CSS</li>
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-1">HTML5</li>
    <li className="bg-gray-100 bg-opacity-30 w-[100px] h-[100px] rounded-full border border-gray-400 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-base animate-float-2">Python</li>
  </ul>
</section>


                </SwiperSlide>

                {/* Education Section */}
                <SwiperSlide>
                    <section className="w-full">
                        <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Education</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-gray-100 bg-opacity-30 p-4 rounded-lg border border-gray-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-colors duration-300">
                                <h3 className="font-semibold text-lg">Trinity College Dublin</h3>
                                <p className="text-gray-200 mt-2 text-sm">MS in Computer Science,<span className="text-gray-200 text-xs"> Future Networked System</span></p>
                                <p className="text-gray-200 mt-2 text-sm">Sep 2023 - Sep 2024</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-gray-100 bg-opacity-30 p-4 rounded-lg border border-gray-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-colors duration-300">
                                <h3 className="font-semibold text-lg">Bangalore Institute of Technology</h3>
                                <p className="text-gray-200 mt-2 text-sm">BE in Computer Science</p>
                                <p className="text-gray-200 mt-2 text-sm">2016-2020</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                {/* Work Experience Section */}
                <SwiperSlide>
                    <section className="w-full">
                        <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Work Experience</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-gray-100 bg-opacity-30 p-4 rounded-lg border border-gray-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-colors duration-300">
                                <h3 className="font-semibold text-lg">Tata Consultancy Services</h3>
                                <p className="text-gray-200 mt-2 text-sm">Systems Engineer</p>
                                <p className="text-gray-200 mt-2 text-sm">Jan 2023 - Aug 2023</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-gray-100 bg-opacity-30 p-4 rounded-lg border border-gray-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-colors duration-300">
                                <h3 className="font-semibold text-lg">Accenture</h3>
                                <p className="text-gray-200 mt-2 text-sm">Application Development Associate</p>
                                <p className="text-gray-200 mt-2 text-sm">Feb 2021 - Aug 2022</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;