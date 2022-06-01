import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const LoginForm = () => {
	const [buttonDisabled, setButtonDisabled] = useState();
	const [incorrectCreds, setIncorrectCreds] = useState(false);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm({ defaultValues: { email: "", password: "" } });

	const watchAllFields = watch();

	const validatePassword = (value) => {
		const emailName = getValues().email.split("@")[0];
		const password1num1upcRegex = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z\d#$@!%&*?]+)$/;

		if (emailName && value.toLowerCase().includes(emailName.toLowerCase()))
			return "Password shouldn't contain the email address name.";

		if (!password1num1upcRegex.test(value)) return "Password must contain 1 or more uppercase letters and numbers.";
	};

	const authenticateUser = (data) => {
		const validUsers = [
			{ email: "mohamed@instabug.com", password: "A12345678" },
			{ email: "mohamed1@instabug.com", password: "A12345678" },
			{ email: "mohamed2@instabug.com", password: "A12345678" },
			{ email: "mohamed3@instabug.com", password: "A12345678" },
			{ email: "mohamed4@instabug.com", password: "A12345678" },
			{ email: "mohamed5@instabug.com", password: "A12345678" },
			{ email: "mohamed6@instabug.com", password: "A12345678" },
			{ email: "mohamed7@instabug.com", password: "A12345678" },
		];

		const enteredEmail = validUsers.find((user) => user.email === data.email);

		if (!enteredEmail || enteredEmail.password !== data.password) {
			setIncorrectCreds(true);
		} else {
			setIncorrectCreds(false);
			localStorage.setItem(
				"loggedUser",
				JSON.stringify({ username: data.email.split("@")[0], email: data.email })
			);
			navigate("/welcome");
		}
	};

	const onSubmit = (data) => authenticateUser(data);

	useEffect(() => {
		if (!(getValues().email && getValues().password)) {
			setButtonDisabled(true);
		} else {
			setButtonDisabled(false);
		}
	}, [watchAllFields]);

	return (
		<form className="login-form" onSubmit={handleSubmit(onSubmit)}>
			{incorrectCreds && <div className="incorrect-creds">Your email and/or password are incorrect</div>}
			<div className="form-control">
				<label htmlFor="email">Work Email</label>
				<input
					type="email"
					placeholder="you@company.com"
					{...register("email", {
						required: "Email address is required.",
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
							message: "Enter a valid email address.",
						},
					})}
					className={errors?.email ? "form-inp-error" : ""}
				/>
				{errors?.email && <p className="form-text-error">{errors.email.message}</p>}
			</div>
			<div className="form-control">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					placeholder="8+ Characters"
					{...register("password", {
						required: "Enter your password.",
						minLength: {
							value: 6,
							message: "Password must be 6 characters or more.",
						},
						validate: validatePassword,
					})}
					className={errors?.password ? "form-inp-error" : ""}
				/>
				{errors?.password && <p className="form-text-error">{errors.password.message}</p>}
				<a className="forgot-password" href="/#">
					Forgot password?
				</a>
			</div>
			<button className="btn login-btn" type="submit" disabled={buttonDisabled}>
				Log in
			</button>
		</form>
	);
};

export default LoginForm;
