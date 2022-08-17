import Link from 'next/link';
import Styles from './css/boxItem.module.css';
import { useFetchBoxItem } from '../../hooks/useFetchBoxItem';
import Slider from 'react-slick';
import { slickConfig } from '../../lib/slick.config.js';
import { useRouter } from 'next/router';
import { SpNavi, PcNavi } from '../Navi/Navi';

export const BoxItem = () => {
    const router = useRouter();
    
    const { boxItemList, isLoading, isError } = useFetchBoxItem();

    return (
        <>
        <section className={Styles.boxItem}>
          <PcNavi />
          <Link href="/"><a><img src="/img/boxItem/logo.svg" className={Styles.logo} alt="logo" /></a></Link>
          <p className={Styles.scrollIcon}>Scloll</p>
          {isError && <p style={{ color: 'red' }}>Server Error | しばらくお待ちください。</p>}
          {isLoading ? <p>Loading...</p> : (
            <Slider {...slickConfig}>
              {boxItemList.map((boxItem) => (
                <ul key={boxItem.id} className={Styles.boxItemItems}>
                  <li className={Styles.boxItemItem}>
                    <Link href={boxItem.url1}>
                      <a className={Styles.boxItemImage} target="_blank" rel="noopener noreferrer">
                        {boxItem.nickName && (<div className={Styles.nickName}>情報提供者: {boxItem.nickName}</div>)}
                        <div className={Styles.station}>
                          <picture>
                            <source srcSet="/img/common/sp-triangle.svg" />
                            <source srcSet="/img/common/pc-triangle.svg" />
                            <img src="/img/common/pc-triangle.svg" className={Styles.triangle} alt={`${boxItem.station}`} />
                          </picture>
                          <div className={Styles.stationName
                            + ' ' 
                            + Styles.fiveText
                            // 文字数によってスタイルを各調整
                          }>{boxItem.station}</div>
                        </div>
                        <img src={`/img/boxItem/${boxItem.eyecatch}`} className={Styles.eyecatch} alt="image" />
                        <div className={Styles.boxItemDetail}>
                          <div>{boxItem.boxName}</div>
                          <div>{boxItem.plice}</div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              ))}  
            </Slider>
          )}
        </section>
        <SpNavi />
        </>
    );
}