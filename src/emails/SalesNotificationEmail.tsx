
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Row,
    Column,
    Hr,
} from "@react-email/components";
import * as React from "react";

interface SalesNotificationEmailProps {
    name: string;
    email: string;
    message: string;
    date: string;
}

export const SalesNotificationEmail = ({
    name,
    email,
    message,
    date,
}: SalesNotificationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Lead: {name} - Welwitech</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Heading style={h1}>New Lead Received 🚀</Heading>
                    </Section>

                    <Section style={content}>
                        <Row style={row}>
                            <Column>
                                <Text style={label}>Name</Text>
                                <Text style={value}>{name}</Text>
                            </Column>
                        </Row>

                        <Row style={row}>
                            <Column>
                                <Text style={label}>Email</Text>
                                <Text style={value}>{email}</Text>
                            </Column>
                        </Row>

                        <Row style={row}>
                            <Column>
                                <Text style={label}>Received At</Text>
                                <Text style={value}>{date}</Text>
                            </Column>
                        </Row>

                        <Hr style={hr} />

                        <Text style={label}>Message</Text>
                        <Section style={messageBox}>
                            <Text style={messageText}>{message}</Text>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: "#f5f5f5",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "40px 0",
    maxWidth: "600px",
};

const header = {
    textAlign: "center" as const,
    marginBottom: "20px",
};

const content = {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};

const h1 = {
    color: "#FF4F00",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
};

const row = {
    marginBottom: "16px",
};

const label = {
    color: "#666666",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    margin: "0 0 4px",
};

const value = {
    color: "#111111",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
};

const hr = {
    borderColor: "#eeeeee",
    margin: "24px 0",
};

const messageBox = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    borderLeft: "4px solid #FF4F00",
};

const messageText = {
    color: "#333333",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0",
    whiteSpace: "pre-wrap" as const,
};

export default SalesNotificationEmail;
