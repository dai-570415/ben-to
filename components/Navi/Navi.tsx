import Link from 'next/link';
import Styles from './css/Navi.module.css';

export const SpNavi = () => {
    return (
        <div className={Styles.spNavi}>
            <ul>
                <li><Link href="#bento"><a>ben-TOとは</a></Link></li>
                <li><Link href="#inquiry"><a>募集フォーム</a></Link></li>
                <li><Link href="#about"><a>私について</a></Link></li>
            </ul>
        </div>
    ); 
}

export const PcNavi = () => {
    return (
        <div className={Styles.pcNavi}>
            <ul>
                <li><Link href="#bento"><a><span>●</span>ben-TOとは</a></Link></li>
                <li><Link href="#about"><a><span>●</span>私について</a></Link></li>
            </ul>
            <Link href="#inquiry"><a className={Styles.btn}>募集フォーム</a></Link>
        </div>
    ); 
}
