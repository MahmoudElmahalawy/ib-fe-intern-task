import WelcomeSlider from "../components/WelcomeSlider";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
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
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
