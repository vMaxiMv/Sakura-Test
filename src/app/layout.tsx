import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header/Header';
import Container from '@/components/Container';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Sakura Test',
    description: 'Description of Sakura Test',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                    rel="stylesheet"
                    precedence="default"
                />
            </head>
            <body className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Container>{children}</Container>
                </main>
                <Footer />
            </body>
        </html>
    );
}
