import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the query parameters using the Record type
type QueryParams = Record<string, string>;

// Create the context with a default value
const QueryParamContext = createContext<QueryParams>({});

// Type for the provider's props
interface QueryParamProviderProps {
    children: ReactNode;
}

// Function to parse hash parameters
function getHashParams(): QueryParams {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    const params = new URLSearchParams(hash);
    const query: QueryParams = {};
    for (const [key, value] of params) {
        query[key] = value;
    }
    return query;
}

// Create the provider component
const QueryParamProvider: React.FC<QueryParamProviderProps> = ({ children }) => {
    const [queryParams, setQueryParams] = useState<QueryParams>(getHashParams());

    useEffect(() => {
        function handleHashChange() {
            setQueryParams(getHashParams());
        }

        window.addEventListener('hashchange', handleHashChange);
        // Set initial state
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <QueryParamContext.Provider value={queryParams}>
            {children}
        </QueryParamContext.Provider>
    );
};

// Custom hook to use the context
function useQueryParams(): QueryParams {
    return useContext(QueryParamContext);
}

export { QueryParamContext, QueryParamProvider, useQueryParams };