import { Inter } from 'next/font/google';
import '../styles/globals.scss';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import React from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });



interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    const messages = useMessages();
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute='class' defaultTheme='system'>
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
