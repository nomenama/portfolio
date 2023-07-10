import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
	const {name, email, subject, message} = req.body;

	const transporter = nodemailer.createTransport({
		port: 465, //or 587
		host: "smtp.gmail.com",
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.USER_PASS,
		},
		secure: true,
	});

	const mailData = {
		from: "men5261@gmail.com",
		to: "justnomen@outlook.com",
		replyTo: email,
		subject: `Message from nomen.uk: ${subject}`,
		html: `
			<div>
				<h2>Name: ${name}</h2>
				<h2>Email: ${email}</h2>
				<p>Message: ${message}</p>	
			</div>
		`
	}

	try {
		const mail = await transporter.sendMail(mailData);

		console.log(`Message sent: ${mail.messageId}`);
		return res.status(200).json({message: "ok"});

	} catch (err) {
		return res.status(500).json({message: err.message});
	}
}