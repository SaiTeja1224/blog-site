"use server";

import { appLinks } from "@/lib/constants";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resendClient = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async (
  email: string,
  subject: string,
  text: string
) => {
  try {
    const response = await resendClient.emails.send({
      from: `Portfolio ${process.env.EMAIL_FROM}`,
      to: [appLinks.email],
      replyTo: email,
      subject: subject,
      text: text,
    });

    if (!response.error) {
      revalidatePath("/about");
    }
  } catch (error) {
    console.error(error);
  }
};
