export const QueryParamHelper = {
    get: (key: string) => {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        return urlParams.get(key);
    },
    set: (key: string, value: string) => {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        urlParams.set(key, value);
        window.location.hash = '?' + urlParams.toString().replace(/=$|=(?=&)/g, '');
    },
    toggle: (key: string) => {
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        if (urlParams.has(key)) {
            urlParams.delete(key);
        } else {
            urlParams.set(key, '');
        }
        window.location.hash = '?' + urlParams.toString().replace(/=$|=(?=&)/g, '');
    }
}

export const enum QueryParamKeys {
    AcceptsNewPatients = 'actnew',
    Distance = 'distance',
    Location = 'location',
    SortBy = 'sortBy',
    Tab = 'tab',
}