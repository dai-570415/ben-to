import { FC } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout/Layout';
import { BoxItem } from '../components/BoxItem/BoxItem';
import { Concept } from '../components/Concept/Concept';
import { Inquiry } from '../components/Inquiry/Inquiry';
import { About } from '../components/About/About';

const Index: FC = () => {
  return (
    <Layout>
      <Head>
        <title>ben-TO | トップ</title>
        <meta name="description" content="ben-TOとは低価格でオーガニックな弁当を集めたプラットフォームです" />
      </Head>
      
      <main>
        <BoxItem />
        <Concept />
        <Inquiry />
        <About />
      </main>
    </Layout>
  )
}

export default Index;