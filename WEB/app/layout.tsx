import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
    title: 'OffC - Offline Converter',
    description: 'OffC is a free, open-source, offline file converter that supports 50+ formats.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className="bg-black text-white" >
                {children}
            </body>
        </html>
    );
}
