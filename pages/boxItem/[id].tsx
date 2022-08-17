import { FC } from 'react';
import Head from 'next/head';
import { Layout } from '../../components/Layout/Layout';
import { BoxItemDetail } from '../../components/BoxItemDetail/BoxItemDetail';

const boxItemDetail: FC = () => {
    return (
        <Layout>
            <Head>
                <title>ben-TO | 詳細ページ</title>
            </Head>

            <main>
                <BoxItemDetail />
            </main>
        </Layout>
    );
}

export default boxItemDetail;