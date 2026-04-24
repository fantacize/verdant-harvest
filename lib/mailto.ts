type MailtoOptions = {
  email: string;
  subject: string;
  bodyLines: string[];
};

export function buildMailtoUrl({
  email,
  subject,
  bodyLines,
}: MailtoOptions) {
  const params = new URLSearchParams({
    subject,
    body: bodyLines.join("\n"),
  });

  return `mailto:${email}?${params.toString()}`;
}
