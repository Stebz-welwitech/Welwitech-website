
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Button,
    Img,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface ClientConfirmationEmailProps {
    name: string;
}

const baseUrl = "https://welwitech.com"; // Replace with actual URL

export const ClientConfirmationEmail = ({
    name,
}: ClientConfirmationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>We received your request - Welwitech</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Img
                            src={`https://welwitech.com/images/logo.png`} // Ensure direct link to logo
                            width="50"
                            height="50"
                            alt="Welwitech"
                            style={logo}
                        />
                    </Section>
                    <Section style={content}>
                        <Heading style={h1}>Welcome to Welwitech, {name}</Heading>
                        <Text style={text}>
                            Thank you for reaching out. We have received your message and our team is already reviewing your project requirements.
                        </Text>
                        <Text style={text}>
                            At Welwitech, we are dedicated to providing ultra-secure, high-performance infrastructure for Dubai's most prestigious properties. A specialist will contact you within the next 4 hours.
                        </Text>

                        <Button
                            style={button}
                            href="https://welwitech.com/projects"
                        >
                            View Our Recent Projects
                        </Button>

                        <Hr style={hr} />

                        <Text style={footerText}>
                            This is an automated confirmation. Please do not reply to this email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: "#000000",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
};

const header = {
    padding: "24px",
    textAlign: "center" as const,
};

const logo = {
    margin: "0 auto",
    display: "block",
};

const content = {
    backgroundColor: "#111111",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid #333333",
};

const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "0 0 24px",
};

const text = {
    color: "#cccccc",
    fontSize: "16px",
    lineHeight: "26px",
    marginBottom: "20px",
};

const button = {
    backgroundColor: "#FF4F00",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "12px",
    marginTop: "20px",
};

const hr = {
    borderColor: "#333333",
    margin: "40px 0 20px",
};

const footerText = {
    color: "#666666",
    fontSize: "12px",
    textAlign: "center" as const,
};

export default ClientConfirmationEmail;
