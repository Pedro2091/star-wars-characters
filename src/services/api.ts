import { useEffect, useState } from "react";

interface Params {
    page: number;
    search: string | null;
}

const URL = "https://swapi.dev/api";

export function useFetch<T = unknown>(route: string, params: Params) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const url = params.search
        ? `${URL}${route}/?search=${params?.search}`
        : `${URL}${route}/?page=${params?.page}`;

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
