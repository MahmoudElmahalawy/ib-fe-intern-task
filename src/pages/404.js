import { useEffect } from "react";

const NotFoundPage = () => {
	useEffect(() => {
		document.title = "404 | Instabug";
	}, []);

	return (
		<div className="not-found-page">
			<img
				className="not-found-page__image"
				src="/assets/images/not-found-illustration.png"
				alt="Page not found"
			/>
			<h2 className="not-found-page__title">404 - Page not found!</h2>
			<p className="not-found-page__text">Sorry, that page doesn't exist. What would you like to do?</p>
		</div>
	);
};

export default NotFoundPage;
