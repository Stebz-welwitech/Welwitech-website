import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: Request) => {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    try {
        const { name, email, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Welwitech Contact <contact@welwitech.com>',
            to: ['maurice@welwitech.com'],
            subject: `New message from ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #FF4F00;">New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #FF4F00; background-color: #f9f9f9;">
            <p style="margin: 0;">${message}</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return new Response(JSON.stringify({ error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Function error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};

export const config = {
    path: "/api/send-email"
};
