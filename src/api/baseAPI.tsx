import {BASE_URL} from '../config';
import {BaseAPIInterface} from '../interfaces';

const get = async ({ endpoint }:BaseAPIInterface) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.log(e);
    }
};

export { get };
