import { RequestOptions } from "@formulaone/types";

export abstract class Paginator {

    private _requestOptions: RequestOptions = {} as RequestOptions;

    constructor() {
        this._requestOptions.page = 1;
    }

    next(): void {
        this._requestOptions.page += 1;
    }

    previous(): void {
        if (this._requestOptions.page > 1)
            this._requestOptions.page -= 1;
    }

    reset(): void {
        this._requestOptions.page = 1;
    }

    get requestOptions(): RequestOptions {
        return this._requestOptions;
    }
}
