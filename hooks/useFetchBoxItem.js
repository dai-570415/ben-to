import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchBoxItem = () => {
    const [boxItemList, setBoxItemList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        fetchBoxItem();
    }, []);
    const fetchBoxItem = () => {
        setIsLoading(true);
        axios
            // .get('http://localhost:3001/boxItem')
            .get('https://script.google.com/macros/s/AKfycbzuOyUyIble68L7H6p3v9gb3zASXQSoKDtcSfctsHQ5erP3nVnk-OMUaTWNykOxQIU/exec')
            .then(result => {
                const boxItem = result.data.map(boxItem => ({
                    id: boxItem.id,
                    nickName: boxItem.nickName,
                    boxName: boxItem.boxName,
                    shop: boxItem.shop,
                    url1: boxItem.url1,
                    url2: boxItem.url2,
                    plice: boxItem.plice,
                    station: boxItem.station,
                    eyecatch: boxItem.eyecatch,
                    created_at: boxItem.created_at,
                }));
                setBoxItemList(boxItem);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }
    return { boxItemList, isLoading, isError };
}