import Styles from './css/concept.module.css';

export const Concept = () => {
    return (
        <section className={Styles.concept}>
            <a id="bento" className="anchor"></a>
            <h2>
                <span>Whats ben-TO?</span>
                低価格で身体に良い<br />お弁当を集めたプラットフォームです
            </h2>
            <p>
                税金や物価など日々上がり続ける昨今。<br />
                少しでもお得に購入したい。<br />
                身体に悪いものはできれば避けたい。<br />
                健康的にバランスの良い食事習慣を心がけたい。<br />
                毎日自炊するのはハードルが高い。<br />
                <br />
                このように思ってる人は少ないはず。<br />
                かくいう私もその一人でスーパーをハシゴしてみたり、<br />
                19時以降のタイムセールを狙ったり、<br />
                できる限り出費を抑える<br className="sp" />
                節約生活に挑戦中です。<br />
                <br />
                もし、こういった情報がひとつのサイトに<br />
                プラットフォームとしてまとまっていれば、<br />
                有益なものになるのではと思い、<br className="sp" />
                このサイトを立ち上げました。<br />
                <br />
                とは言っても、１人の情報収集では限界があります。<br />
                些細な情報でも良いので、ご存じである情報を<br />
                ご提供いただける非常に助かります。
            </p>
            <p className={Styles.scrollIcon}></p>

            <img src="/img/common/left-leaf.png" className={Styles.leftLeaf} alt="image" />
            <img src="/img/common/right-leaf.png" className={Styles.rightLeaf} alt="image" />
        </section>
    );
}