import * as React from "react";

interface EmailTemplateProps {
  name: string | undefined;
  email: string| undefined;
  subject: string | undefined;
  message: string | undefined;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <div>
      <h2>{subject}</h2>
      <p>
        Hi, my name is <strong>{name}</strong> !{" "}
      </p>
      <p>{message}</p>
      <p>You can reach out to me on {email}</p>
    </div>
  );
};
