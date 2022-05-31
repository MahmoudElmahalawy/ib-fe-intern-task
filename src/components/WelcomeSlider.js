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
				<img src="/assets/images/hrA.svg" />
				<p className="slide-text">Accelerate your entire mobile team workflow</p>
			</SwiperSlide>
			<SwiperSlide>
				<img src="/assets/images/hrB.svg" />
				<p className="slide-text">The most comprehensive bug reporting tool for mobile apps</p>
			</SwiperSlide>
			<SwiperSlide>
				<img src="/assets/images/hrV.svg" />
				<p className="slide-text">Secure crash reporting with real-time alerts</p>
			</SwiperSlide>
		</Swiper>
	);
};

export default WelcomeSlider;
