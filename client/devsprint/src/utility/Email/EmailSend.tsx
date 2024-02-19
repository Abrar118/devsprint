import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

async function sendEmailTo(email_to: string, message_body: unknown) {
	const form = {
		to_email: email_to,
		message: message_body,
	};

	// console.log(form );
	const sendEmail = async () => {
		const response = await emailjs.send(
			"service_3fy6krw",
			"template_beimqbq",
			form,
			"E3-0vUQPbmVnJDhAa",
		);

		if (response) toast.success("Verification code sent successfully");
		else toast.error("Failed to send verification code");
	};

	await sendEmail();
}

export { sendEmailTo };
