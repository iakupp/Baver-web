import { Resend } from "resend";
import EmailTemplate from "../../components/shared/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { firstName, lastName, email, mobile, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jakubmajercik.jm@gmail.com",
        subject: "Nový dopyt z webu",
        react: EmailTemplate({ firstName, lastName, email, mobile, message }),
    //   reply_to: email,
    });

    return Response.json({ success: true });
  } catch (err) {
      console.log(err)
    return Response.json({ success: false }, { status: 500 });
  }
}