import { FC } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';

export const Layout: FC = ({ children }) => {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/meta/favicon.ico" />
            </Head>

            { children }

            <Footer />
        </div>
    );
}
