import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function email(email_to: string, message_body: unknown) {
	const form = {
		to_email: email_to,
		message: message_body,
	};

	// console.log(form );
	const sendEmail = () => {
		emailjs
			.send("service_3fy6krw", "template_beimqbq", form, "E3-0vUQPbmVnJDhAa")
			.then(
				(result) => {
					// console.log(result.text);
					toast.success("Verification code sent successfully");
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	sendEmail();
}

export { email };
