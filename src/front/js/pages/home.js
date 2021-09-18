
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="container row text-center mt-5  d-flex justify-content-center">
			<div className="col-6 d-flex flex-column p-5 mt-3 myBox">
				<Link to="/sign_up">
					<button className="btn btn-outline-primary btn-lg btn-block mb-2 text-decoration-none">
						Sign Up
					</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-outline-primary btn-lg btn-block mt-2 text-decoration-none">
						Login
					</button>
				</Link>
			</div>
		</div>
	);
};