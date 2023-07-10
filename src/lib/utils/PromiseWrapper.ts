import { Abort } from "./Abort";
import { ErrorCallback } from "../../Types";



export async function Wrapper<T>(promise: any, abort: Abort) {

    try {
        const res = await new Promise(async (acc: Function, reject: Function) => {
            try {
                abort.attach(reject as ErrorCallback);
                acc(await promise)
            } catch (err: any) {
                reject(err)
            }
        })
        return res;

    } catch (err: any) {
        // throw new Error(err.message)
        throw Error(err.message)

    }
}


// return { ...promise, abort: () => { abort.abort() } }

