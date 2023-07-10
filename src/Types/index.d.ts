
type ErrorCallback = (error: Error) => void

export interface AbortPromsie {
    controller: AbortController;
    reject?: ErrorCallback;
    abort: () => void
    attach: (callback: ErrorCallback) => void
}