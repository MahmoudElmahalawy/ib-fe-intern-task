import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Navigate to="/login" />} />
				<Route exact path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
