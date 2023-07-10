

import { Abort } from "./utils/Abort";
import { Wrapper } from "./utils/PromiseWrapper";



export function Abortablepromise<T>(promise: Promise<T>): { abort: Abort, promise: Promise<T> | Promise<unknown> } {
  const abort = new Abort()

  return { abort: abort, promise: Wrapper(promise, abort) }


}