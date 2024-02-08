/* eslint-disable @typescript-eslint/no-explicit-any */
const setStorage = (key: string, data: string): void => {
    localStorage.setItem(key, data);
}

const getStorage = (key: string): Record<string, any> | null => {
    const storage = localStorage.getItem(key) ?? ""; 
    return storage ? JSON.parse(storage) : null;
}

export { setStorage, getStorage }