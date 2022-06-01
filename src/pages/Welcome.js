import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
	const [loggedInUser, setLoggedInUser] = useState(null);

	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear("loggedInUser");
		navigate("/");
	};

	useEffect(() => {
		document.title = "Welcome | Instabug";

		const userInLS = JSON.parse(localStorage.getItem("loggedInUser"));

		if (!userInLS) {
			navigate("/login");
		} else {
			setLoggedInUser(userInLS);
		}
	}, []);

	return !loggedInUser ? null : (
		<div className="welcome-page">
			<p className="welcome-page__text">
				Welcome to <span className="user-email">{loggedInUser.email}</span>
			</p>
			<button className="btn log-out-btn" onClick={logout}>
				Log out
			</button>
		</div>
	);
};

export default WelcomePage;
