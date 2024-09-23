"use server";

import React from "react";
import { Resend } from "resend";
import Email from "@/email/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxlength?: number): boolean => {
    return typeof value === "string" && (!maxlength || value.length <= maxlength);
  };

export const handleSubmit = async (formData: FormData) => {
    const message = formData.get("description");
    const senderName = formData.get("fname");
    const senderEmail = formData.get("email");

    // Add console logs here to check the data
    console.log("Form Data:", formData);
    console.log("Message:", message);
    console.log("Sender Name:", senderName);
    console.log("Sender Email:", senderEmail);

    console.log("Sender Name:", senderName);  // Log the sender name to debug
    if (!validateString(senderName, 50)) {
        return {
            error: "Please enter your name",
        };
    }


    if (!validateString(message, 1000)) {
        return {
            error: "Invalid message",
        };
    }

    if (!validateString(senderName, 50)) {
        return {
            error: "Please enter your name",
        };
    }

    if (!validateString(senderEmail, 100)) {
        return {
            error: "Please enter your email",
        };
    }

    try {
        const emailResponse = await resend.emails.send({
            from: `Portfolio Message - ${senderName} <onboarding@resend.dev>`,
            to: "punsaranijayawardhana@gmail.com",
            subject: `Message from ${senderName} via Contact Form`,
            replyTo: senderEmail as string,
            react: React.createElement(Email, { message: message as string, name: senderName as string }),
        });

        console.log("Email response:", emailResponse);
        console.log("Email successfully sent"); // Log success message

        return { success: true };
    } catch (error: unknown) {
        console.error("Email send error:", error); // Log the error

        if (error instanceof Error) {
            return {
                error: error.message,
            };
        } else if (typeof error === "object" && error !== null && "message" in error) {
            return {
                error: (error as any).message,
            };
        } else {
            return {
                error: "Something went wrong",
            };
        }
    }
};


