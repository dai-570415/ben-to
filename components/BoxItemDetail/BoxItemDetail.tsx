import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFetchBoxItem } from '../../hooks/useFetchBoxItem';

export const BoxItemDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { boxItemList, isLoading, isError } = useFetchBoxItem();

    return (
        <>
            {isError && <p style={{ color: 'red' }}>Server Error | しばらくお待ちください。</p>}
            {isLoading ? <p>Loading...</p> : (
                <section>
                    {boxItemList.map((boxItem) => (
                        <ul key={boxItem.id}>
                            {id === boxItem.id && (
                                <li>
                                    {boxItem.nickName}<br />
                                    {boxItem.boxName}<br />
                                    {boxItem.shop}<br />
                                    <Link href={boxItem.url1}><a target="_blank" rel="noopener noreferrer">{boxItem.url1}</a></Link><br />
                                    <Link href={boxItem.url2}><a target="_blank" rel="noopener noreferrer">{boxItem.url2}</a></Link><br /><br />
                                    {boxItem.plice}<br />
                                    {boxItem.station}<br />
                                    <img src={`/img/boxItem/${boxItem.eyecatch}`} style={{width: '100px'}} alt="" /><br />
                                    {boxItem.created_at}
                                </li>
                            )}
                        </ul>
                    ))} 
                </section>
            )}
        </>
    );
}