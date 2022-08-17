import { useState } from 'react';

export const useMail = () => {
    const [nickName, setNickName] = useState('');
    const [boxName, setBoxName] = useState('');
    const [shop, setShop] = useState('');
    const [url, setUrl] = useState('');
    const [plice, setPrice] = useState('');
    const [station, setStation] = useState('');
    const [pending, setPending] = useState(false);

    const send = async () => {
        setPending(true);
        try {
            await fetch('/api/mail', {
                method: 'POST',
                body: `
                    送信された情報
                    --------------------------------------
                    ニックネーム
                    ${nickName}
                    --------------------------------------
                    お弁当名
                    ${boxName}
                    --------------------------------------
                    購入店舗・施設
                    ${shop}
                    --------------------------------------
                    購入元サイト
                    ${url}
                    --------------------------------------
                    価格
                    ${plice}
                    --------------------------------------
                    価格
                    ${station}
                    --------------------------------------
                `,
            });
        } finally {
            setPending(false);
            location.reload();
        }
    };

    return {
        setNickName, setBoxName, setShop, setUrl, setPrice, setStation, send, pending
    };
};