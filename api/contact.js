import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, details } = req.body;

  if (!name || !email || !details) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Western Elements Studio <onboarding@resend.dev>',
      to: 'josh@westelementsstudio.ca',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <hr />
        <p><strong>Project Details:</strong></p>
        <p>${details.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
