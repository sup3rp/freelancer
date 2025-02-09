import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  debugger;
  console.log("POST: send-email");
  console.log(`req.body: ${req.body}`);
  if (req.method !== "POST") {
    return NextResponse.json(
      {
        message: "Method not allowed",
      },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { name, email, service, message } = body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "p.simoes.miranda@gmail.com", // secure this in an env file //process.env.GMAIL_USER
      pass: "basi xneq rzbv rspm", // secure this APP PASSWORD in an env file //process.env.GMAIL_PASS
    },
  });

  const mailOptions = {
    from: email,
    to: "p.simoes.miranda@gmail.com", // secure this in an env file //process.env.GMAIL_USER
    subject: `Novo pedido de contacto de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nInteressado no serviço: ${service}\nMensagem: ${message}`,
  };

  try {
    debugger;
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: "Email sent successfuly!",
      },
      { status: 200 }
    );
  } catch (errorException) {
    debugger;
    console.error("Error sending email: ", errorException);
    return NextResponse.json(
      {
        message: "Failed to send email.",
        error: errorException,
      },
      { status: 500 }
    );
  }
}
