import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_BASE_URL } from "../constants";

export const SignUp = () => {

	let history = useHistory();
	const [formValue, setFormValue] = useState({
		email: "",
		password: ""
	});

	const inputHandelChange = e => {
		//"[e.target.name]" corresponde a los name de los inputs del form"
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handlerSubmit = e => {
		e.preventDefault();

		const raw = JSON.stringify(formValue);

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: raw,
			redirect: "follow"
		};

		fetch(`${API_BASE_URL}/api/sign_up`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log("New user was created: ", result);
				// Para ir al home tras habernos registrado
				history.push("/");
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="container row text-center mt-5  d-flex justify-content-center">
			<h1 className="col-6">Sing Up</h1>
			<form onSubmit={handlerSubmit} className="col-6 p-5 mt-3 myBox text-white">
				<div className="form-grup row mt-2">
					<label htmlFor="email" className="col-4">
						Email
					</label>
					<input
						className="col-6"
						type="email"
						name="email"
						id="email"
						placeholder="example@gamil.com"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div className="form-grup row mt-2">
					<label htmlFor="password" className="col-4">
						password
					</label>
					<input
						className="col-6"
						type="password"
						name="password"
						placeholder="Enter yor password"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-outline-primary btn-lg btn-block  mt-4">
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
};