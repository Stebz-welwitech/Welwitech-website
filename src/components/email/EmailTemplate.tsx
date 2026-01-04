
import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h1 style={{ color: '#FF4F00' }}>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <div style={{ marginTop: '20px', padding: '15px', borderLeft: '4px solid #FF4F00', backgroundColor: '#f9f9f9' }}>
            <p style={{ margin: 0 }}>{message}</p>
        </div>
    </div>
);
