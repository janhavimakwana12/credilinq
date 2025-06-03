import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CssBaseline, Container } from "@mui/material";
import { ReduxProvider } from '@/store/provider';

export const metadata = {
  title: "Credilinq Form",
  description: "SME Healthcheck Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
      <ReduxProvider>
        <CssBaseline />
        <Header />
        <Container sx={{ minHeight: "80vh" }}>
          {children}
        </Container>
        <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
