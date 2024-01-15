"use server";

import { EmailTemplate } from "@/components/email-template";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

interface prevStateProp {
  status: string;
  message: string;
}

export async function submit(prevState: prevStateProp, formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string;

  const { data, error } = await resend.emails.send({
    from: "Hello <onboarding@resend.dev>",
    to: ["ayoolacodes@gmail.com"],
    subject: "New message from your portfolio website",
    react: EmailTemplate({
      name,
      email,
      subject,
      message,
    }) as React.ReactElement,
  });

  revalidatePath('/')
  if (error) {
    return { status: "error", message: "error" };
  }

  return {
    status: "success",
    message: `Thank you for your interest ${name.toUpperCase()}! I will get back to you soon!`,
  };
}
