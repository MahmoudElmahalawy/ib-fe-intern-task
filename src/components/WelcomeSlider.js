import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const WelcomeSlider = () => {
	return (
		<Swiper
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			pagination={true}
			modules={[Autoplay, Pagination]}
			className="welcome-slider"
		>
			<SwiperSlide>
				<img src={"https://svgshare.com/i/hrA.svg"} />
				<p className="slide-text">Accelerate your entire mobile team workflow</p>
			</SwiperSlide>
			<SwiperSlide>
				<img src={"https://svgshare.com/i/hrB.svg"} />
				<p className="slide-text">The most comprehensive bug reporting tool for mobile apps</p>
			</SwiperSlide>
			<SwiperSlide>
				<img src={"https://svgshare.com/i/hrV.svg"} />
				<p className="slide-text">Secure crash reporting with real-time alerts</p>
			</SwiperSlide>
		</Swiper>
	);
};

export default WelcomeSlider;
