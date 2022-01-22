const Form = () => {
	const formData = (event) => {
		event.preventDefault() // don't redirect the page
		// where we'll add our form logic
	}

	return (
		<form onSubmit={formData}>
			<h1>Fill This Shit Out</h1>
			{/* <label htmlFor="name">Name</label> */}
			<input
				id="name"
				type="text"
				autoComplete="name"
				placeholder="Name"
				required
			/>
			<br />
			<br />
			{/* <label htmlFor="email">Email</label> */}
			<input id="email" type="email" placeholder="Email" required />
			<br />
			<br />
			{/* <label htmlFor="name">Message</label> */}
			<textarea
				id="message"
				rows="6"
				cols="40"
				placeholder="Message"
				required
			></textarea>
			<br />
			<br />
			<button type="submit">Submit</button>

			<style jsx>{`
				form {
					width: 50%;
					margin: auto;
					border: 2px solid white;
				}
				label {
					font-size: 2rem;
					padding: 2rem;
				}
				input {
					width: 200px;
					height: 20px;
					margin-left: 2rem;
				}
				textarea {
					margin-left: 2rem;
				}
				h1 {
					text-align: center;
				}
				button {
					width: 150px;
					margin-left: 2rem;
					margin-bottom: 2rem;
					font-size: 20px;
				}
				::placeholder {
					font-size: 20px;
				}
			`}</style>
		</form>
	)
}

export default Form
