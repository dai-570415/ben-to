import { FC } from 'react';
import Link from 'next/link';
import Styles from './css/footer.module.css';
import { useRouter } from 'next/router';

export const Footer: FC = () => {
    const router = useRouter();

    return (
        <footer className={Styles.footer}>
            <div className={Styles.innerFooter}>
                <div className={Styles.snsWrapper}>
                    <Link href="https://twitter.com/dai_designing"><a target="_blank" rel="noopener noreferrer"><img src="/img/common/tw.svg" className={Styles.snsIcon} alt="Twitter"/></a></Link>
                    <Link href="https://github.com/dai-570415"><a target="_blank" rel="noopener noreferrer"><img src="/img/common/github.svg" className={Styles.snsIcon} alt="GitHub"/></a></Link>
                    <Link href="https://qiita.com/dai_designing"><a target="_blank" rel="noopener noreferrer"><img src="/img/common/qiita.svg" className={Styles.snsIcon} alt="Qiita"/></a></Link>
                </div>
                <div className={Styles.copyright}><span>©️</span>{new Date().getFullYear()} ben-TO</div>
            </div>
        </footer>
    );
}
