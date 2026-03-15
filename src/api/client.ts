import type {
    AcceptUserParams,AcceptUserResponse,
    AcceptTokenParams,AcceptTokenResponse
} from './types'

export interface ConnectionInfo {
    host: string
    port: string | number
    authentication: string | null
    pathPrefix: string
}

export class ApiClient{
    private api: any

    constructor(connectionInfo:ConnectionInfo){
        if(!window.TServerMethods){
            throw new Error('TServerMethods not loaded')
        }
        this.api = new window.TServerMethods(connectionInfo)
    }

    private promisify<T> (method: Function, params:any):Promise<T>{
        return new Promise((resolve, reject) => {
            method(params, (result: any, status: string) => {
                if (status === 'success' && result?.result) {
                    resolve(result.result as T);
                } else {
                    reject(new Error(result?.error || 'Unknown API error'));
                }
            });
        });
    }

    async acceptToken(params: AcceptTokenParams): Promise<AcceptTokenResponse> {
        return this.promisify<AcceptTokenResponse>(this.api.acceptToken.bind(this.api),params)
    }

    async acceptUser(params: AcceptUserParams): Promise<AcceptUserResponse> {
        return this.promisify<AcceptUserResponse>(this.api.acceptUser.bind(this.api),params)
    }
}


