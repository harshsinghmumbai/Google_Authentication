"use server";
import { Resend } from "resend";

const resend = new Resend("re_GJyxrNVo_GVw67MtvgEu17pdxXhcqsEEP");

export const SendEmail = async (value) => {
  const { Name, Email, Image } = await value;
  await resend.emails.send({
    to: "harshrsingh552005@gmail.com",
    from: "OrcDev <onboarding@resend.dev>",
    subject: `${Name} has login`,
    react: (
      <div>
        <div className="flex justify-center items-center text-center">
          <img
            src={`${Image}`}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <p>
          {`${Name}`} has successfully signed in to your Google Authentication
          Web Application using the Email ID: {`${Email}`}
        </p>
        <p>The Harsh team</p>
        <hr />
        <footer>470 Noor Ave STE B #1148, South San Francisco, CA 94080</footer>
      </div>
    ),
  });
};
