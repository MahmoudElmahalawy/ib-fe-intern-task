const LoginForm = () => {
	return (
		<form className="login-form">
			<div className="form-control">
				<label htmlFor="email">Work Email</label>
				<input type="email" placeholder="you@company.com" />
			</div>
			<div className="form-control">
				<label htmlFor="password">Password</label>
				<input type="password" placeholder="8+ Characters" />
				<a className="forgot-password" href={() => false}>
					Forgot password?
				</a>
			</div>
			<button className="btn login-btn" type="submit">
				Log in
			</button>
		</form>
	);
};

export default LoginForm;
