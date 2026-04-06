import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
} from "@react-email/components";

import { FormTypes } from "../../types/emailTemplate";

const EmailTemplate = ({
  firstName,
  lastName,
  email,
  mobile,
  message,
}: FormTypes) => {
  return (
    <Html>
      <Head />

      <Body style={styles.body}>
        <Container style={styles.container}>
          
          <Heading style={styles.h1}>
            Nový dopyt
          </Heading>

          <Text style={styles.text}>
            <strong>Dobrý deň, obdržali sme nový dopyt z Vášho webu.</strong>
          </Text>
          <Text style={styles.text}>
            <strong>Nižšie nájdete detaily:</strong>
          </Text>

          <Section style={styles.dataBox}>
            <Text style={styles.text}>
              <strong>Meno:</strong> {firstName} {lastName}
            </Text>
            <Text style={styles.text}>
                          <strong>Email:</strong>
                          <a href={`mailto:${email}`} style={styles.link}>
    {email}
                          </a>
            </Text>
            <Text style={styles.text}>
            <strong>Telefon:</strong>
            <a href={`tel:${mobile}`} style={styles.link}>
                {mobile}
            </a>
            </Text>
            <Text style={styles.text}>
              <strong>Správa:</strong> {message}
            </Text>
          </Section>

          <Button href="https://www.baver.sk" style={styles.button}>
            www.baver.sk
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

// 👇 SEM!
const styles = {
  body: {
    backgroundColor: "#f4f7fa",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  container: {
    backgroundColor: "#ffffff",
    padding: "30px",
  },

  h1: {
    fontSize: "28px",
    color: "#2ababb",
    margin: "20px 0",
    fontWeight: "600",
  },

  text: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "16px",
    },
  
  link: {
  color: "#2ababb",
//   textDecoration: "none",
  fontWeight: "600",
},

  dataBox: {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#F5F8FF",
  },

  button: {
    display: "inline-block",
    padding: "14px 28px",
    backgroundColor: "#2ababb",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "600",
    marginTop: "20px",
  },
};