/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const get = (url: string) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url,
            validateStatus: () => true,
        }).then(({ data }) => resolve(data))
        .catch((data) => reject(data));
    });
};


const post = (url: string, object: Record<string, any>) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url,
            data: object
        }).then(({ data }) => resolve(data))
        .catch((error) => {
            console.log(error.toJSON());
            reject(error);
        });
    });
};

export { get, post };