import { client, sender } from './mailtrap.config.js';
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';


export const sendVerificationEmail = async(email, verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            subject: "Verify your email" ,
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verfication"
        })

        console.log("Email sent successfully", response)
    } catch (error) {

        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {

    const recipient = [{ email }];
    try {
        const response = await client.send({
            from: sender,
            to: recipient,
            template_uuid: "9fa8e4e2-8986-4c25-a092-b4061d4a714a",
            template_variables: {
                "name": name,
            }
        });

        console.log("Welcome Email sent", response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
        console.log("Reset Password Email sent", response);
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};