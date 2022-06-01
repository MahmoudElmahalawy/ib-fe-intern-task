import { useEffect } from "react";

import WelcomeSlider from "../components/WelcomeSlider";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
	useEffect(() => {
		document.title = "Login | Instabug";
	}, []);

	return (
		<div className="login-page">
			<div className="slider-section">
				<WelcomeSlider />
			</div>
			<div className="login-section">
				<div className="container">
					<img className="login-section__logo" src="/assets/logos/instabug-logo.png" alt="Instabug logo" />
					<h2 className="login-section__title">Log in to Instabug</h2>
					<SocialLogin />
					<div className="or">OR</div>
					<LoginForm />
					<div className="sign-up">
						<p>
							Don't have an account?
							<a href="/#">Sign up</a>
						</p>
						<a href="/#">Login via SSO</a>
					</div>
					{/* <div className="trusted-by">
						<p className="trusted-by__text">Trusted by top companies</p>
						<div className="trusted-by__logos">
							<img src="/assets/logos/lyft-logo.svg" alt="Lyft" />
							<img src="/assets/logos/buzzfeed-logo.svg" alt="Buzzfeed" />
							<img src="/assets/logos/asana-logo.svg" alt="Asana" />
							<img src="/assets/logos/oneplus-logo.svg" alt="Oneplus" />
							<img src="/assets/logos/houseparty-logo.svg" alt="Houseparty" />
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
