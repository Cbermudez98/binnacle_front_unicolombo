/* eslint-disable @typescript-eslint/no-explicit-any */
const setStorage = (key: string, data: string): void => {
    localStorage.setItem(key, data);
}

const getStorage = (key: string): Record<string, any> => {
    return JSON.parse(localStorage.getItem(key) ?? "{}");
}

export { setStorage, getStorage }