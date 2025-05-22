import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CssBaseline, Container } from "@mui/material";

export const metadata = {
  title: 'Credilinq Form',
  description: 'SME Healthcheck Form',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <CssBaseline/>
        <Header/>
        <Container maxWidth="md" sx={{ minHeight: '80vh' }}>
        {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
