// We can create a custom hook, useFetch, to handle data fetching, error handling, and loading states
// A custom hook abstracts the data fetching logic, which can be reused across multiple components

import { useState, useEffect } from "react";

interface UseFetchResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const useFetch = <T>(fetchFunction: () => Promise<T>): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);           //data: Holds the fetched data
    const [error, setError] = useState<string | null>(null);    //error: Holds the error message if the requests fails
    const [loading, setLoading] = useState<boolean>(true);      //loading: Boolean flag indicating whether the request is in progress

    useEffect(()=> {                                            // Fetches data when the url changes from dependancy array
        const fetchData = async () => {
            try {
                const result = await fetchFunction();          // Use axios to make the HTTP GET request
                setData(result);
            } catch (error) {
                setError((error as Error).message || "Failed to fetch data.");
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [fetchFunction]);

    return {data, error, loading};
}

export default useFetch;