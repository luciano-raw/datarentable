"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const industry = formData.get("industry") as string;
    const message = formData.get("message") as string;

    try {
        const data = await resend.emails.send({
            from: "DataRentable <onboarding@resend.dev>", // Replace with your domain once verified
            to: process.env.CONTACT_EMAIL || "datarentable@gmail.com",
            subject: `Nuevo Lead: ${name} (${industry})`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7C3AED;">Nuevo contacto desde DataRentable</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Industria:</strong> ${industry}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message}
          </div>
        </div>
      `,
        });

        return { success: true, data };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
}
