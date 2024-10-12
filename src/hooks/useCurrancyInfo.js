import { useEffect } from "react";
import { useState } from "react";

function useCurrancyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(result => setData(result[currency]));
    }, [currency]);

    return data;
}

export default useCurrancyInfo;
