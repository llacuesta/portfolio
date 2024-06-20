"use server"

// Imports
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid email address! Please try again later."
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message! Please try again later."
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "lycosheen27@gmail.com",
      subject: `Message from ${email as string}`,
      text: message as string,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
  
  return {
    data
  }
}