import Link from 'next/link';
import Styles from './css/about.module.css';

export const About = () => {
    return (
        <section className={Styles.about}>
            <a id="about" className="anchor"></a>
            <div className={Styles.innerAbout}>
                <h2>
                    <span>About Me</span>
                    私について
                </h2>
                <p>
                    メイン業務ではDTP（書籍、フリーペーパー、チラシ、販促ポスター、<br className="pc" />
                    ポップ、グッズ、名刺など）、幅広く制作業務に従事。<br className="pc" />
                    また、2017年7月からプログラミングを学び始めたことでWeb業務にも従事。<br className="pc" />
                    どの媒体のデザインにも幅広く対応できるのが私の強みです。<br className="pc" />
                </p>
                <Link href="https://next-ts-portfolio-kappa.vercel.app/"><a className={Styles.link} target="_blank" rel="noopener noreferrer">Portfolio</a></Link>
            </div>
        </section>
    );
}