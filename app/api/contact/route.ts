import { Resend } from 'resend'


export async function POST(req: Request) {
	const resend = new Resend("REMOVED");
	try {

		const { name, email, message } = await req.json();

		const response = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["midnightmarth@gmail.com"],
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		});
		console.log("Send email! ", response)
		return Response.json({ success: true, response }, { headers: { "Access-Control-Allow-Origin": "*" } });
	} catch (error) {
		console.log("Email Not Send! ", error)
		return Response.json({ success: false, error });
	}
}