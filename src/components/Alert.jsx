import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Alert = ({ message, type }) => {
    useEffect(() => {
        if (message) {
            switch (type) {
                case 'error':
                    toast.error(message);
                    break;
                case 'success':
                    toast.success(message);
                    break;
                case 'info':
                    toast.info(message);
                    break;
                case 'warning':
                    toast.warning(message);
                    break;
                default:
                    toast(message);
            }
        }
    }, [message, type]);

    return null;
};

export default Alert;
