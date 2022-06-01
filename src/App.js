import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import WelcomePage from "./pages/Welcome";
import NotFoundPage from "./pages/404";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Navigate to="/welcome" />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/welcome" element={<WelcomePage />} />
				<Route exact path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
