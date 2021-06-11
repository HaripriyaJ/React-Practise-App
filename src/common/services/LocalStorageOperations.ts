export const StoreToLS = (key:string, data:any) => {
    localStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
}

export const FetchFromLS = (key:string): any[] | string => {
    let data = localStorage.getItem(key) ?? '';
    try {
        data = JSON.parse(data);
        return data;
    }
    catch (e) {
        return data;
    }
}

export const RemoveFromLS = (key: string) => {
    localStorage.removeItem(key);
}
