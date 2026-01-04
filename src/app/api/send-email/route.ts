import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ClientConfirmationEmail } from '@/emails/ClientConfirmationEmail';
import { SalesNotificationEmail } from '@/emails/SalesNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" });

        // Send emails in parallel
        const { data, error } = await resend.batch.send([
            // 1. Email to the Sales Team (You)
            {
                from: 'Welwitech Leads <onboarding@resend.dev>', // Update to verified domain in prod
                to: ['maurice@welwitech.com'],
                subject: `New Lead: ${name} 🔥`,
                replyTo: email,
                react: SalesNotificationEmail({ name, email, message, date }),
            },
            // 2. Email to the Client (Confirmation)
            {
                from: 'Welwitech <onboarding@resend.dev>', // Update to verified domain in prod
                to: [email],
                subject: 'We received your request - Welwitech',
                react: ClientConfirmationEmail({ name }),
            },
        ]);

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server Internal Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
