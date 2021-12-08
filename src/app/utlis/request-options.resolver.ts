import { RequestOptions } from "../models/request-options.model";

export abstract class RequestOptionsResolver {

    static resolve(url: string, requestOptions: RequestOptions): string {
        const keys = Object.keys(requestOptions);

        keys.map((key: string) => {
            if (requestOptions[key]) {
                url = url.replace(`[${key}]`, requestOptions[key]);
            }
        })

        return url;
    }

}