const SocialLogin = () => {
	return (
		<div className="social-login">
			<button className="btn google-btn">
				<img className="btn-logo" src="/assets/logos/google-logo.svg" alt="Google logo" />
				<span className="btn-text">Google</span>
			</button>
			<button className="btn github-btn">
				<img className="btn-logo" src="/assets/logos/github-logo.svg" alt="GitHub logo" />
				<span className="btn-text">GitHub</span>
			</button>
			<button className="btn microsoft-btn">
				<img className="btn-logo" src="/assets/logos/microsoft-logo.svg" alt="Microsoft logo" />
				<span className="btn-text">Microsoft</span>
			</button>
		</div>
	);
};

export default SocialLogin;
