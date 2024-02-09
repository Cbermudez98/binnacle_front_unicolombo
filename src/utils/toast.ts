import { TypeOptions, toast } from 'react-toastify';

interface IToast {
    message: string;
    type: TypeOptions;
}

const showToast = (info: IToast) => {
    return toast(info.message, { type: info.type });
};

export default showToast;