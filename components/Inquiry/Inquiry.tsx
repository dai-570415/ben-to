
import Styles from './css/inquiry.module.css';
import { useMail } from '../../hooks/useMail';

export const Inquiry = () => {
    const { setBoxName, setShop, setUrl, setPrice, setNickName, setStation,  send, pending } = useMail();

    return (
        <section className={Styles.inquiry}>
            <a id="inquiry" className="anchor"></a>
            <h2>
                <span>Contribution</span>
                情報提供ご協力お願いします
            </h2>
            <p>
                以下フォームから必要事項記入の上、送信ください。<br />
                十分、情報を確認・精査した上、<br className="sp" />
                当サイトにて掲載させていただきます。<br />
            </p>
            <div className={Styles.form}>
                <dl>
                    <dt className={Styles.dtNickName}>ニックネーム<span className={Styles.any}>任意</span></dt>
                    <dd>
                        <input type="text" className={Styles.input} onChange={(e) => setNickName(e.target.value)} placeholder="ニックネーム" />
                        <ul className={Styles.caution}>
                            <li><span>※</span>コントリビューターとしてニックネーム公開しても良い場合のみご記入お願いします</li>
                            <li><span>※</span>ご記入の際、本名はお控えください</li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>お弁当名<span>必須</span></dt>
                    <dd><input type="text" className={Styles.input} onChange={(e) => setBoxName(e.target.value)} placeholder="お弁当名" /></dd>
                </dl>
                <dl>
                    <dt>購入店舗・施設<span>必須</span></dt>
                    <dd><input type="text" className={Styles.input} onChange={(e) => setShop(e.target.value)} placeholder="購入店舗・施設" /></dd>
                </dl>
                <dl>
                    <dt>購入元サイト<span>必須</span></dt>
                    <dd><input type="text" className={Styles.input} onChange={(e) => setUrl(e.target.value)} placeholder="購入元サイトのURL" /></dd>
                </dl>
                <dl>
                    <dt>価格<span>必須</span></dt>
                    <dd><input type="text" className={Styles.input} onChange={(e) => setPrice(e.target.value)} placeholder="※最大でも700〜800円くらい" /></dd>
                </dl>
                <dl>
                    <dt>最寄駅<span>必須</span></dt>
                    <dd><input type="text" className={Styles.input} onChange={(e) => setStation(e.target.value)} placeholder="例 各線三宮駅 など" /></dd>
                </dl>

                <button type="button" className={Styles.btn} onClick={send}>クリックするとすぐ送信されます</button>
                <p>{ pending && 'メール送信中...' }</p>
            </div>
        </section>
    );
}