import nodemailer from 'nodemailer';
import HTML_TEMPLATE from "../../api/send-message/mail-template";
import { NextResponse } from "next/server";

export async function POST(req: { json: () => any; }, res: any) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body.formData;

    // Configure nodemailer with your email provider's details
    const transporter = nodemailer.createTransport({
      host: 'mail.blackboxdesigns.co.za',
      port: 465,
      secure: true,
      auth: {
        user: 'htc@blackboxdesigns.co.za',
        pass: 'Dutyhome25',
      },
    });

    const mailOptions = {
      from: "htc@blackboxdesigns.co.za",
      to: email,
      subject: subject,
      text: `${name} ${message}`,
	  html: HTML_TEMPLATE(name, message, subject)
    };

    await transporter.sendMail(mailOptions);
    return new NextResponse("Sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("error", { status: 500 });
  }
}
