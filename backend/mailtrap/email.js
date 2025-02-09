import { client, sender } from './mailtrap.config.js';
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';


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