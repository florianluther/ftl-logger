export type AllowedMessageType = string | string[]

/**
 * An abstract logger that can be used throughout the code to easily replace its implementation.
 *
 * @export
 * @interface ILogger
 */
export interface ILogger {
    /**
     * Logs the specified `message`.
     *
     * @param message The specified `message` that should be logged.
     */
    log(message: AllowedMessageType): void

    /**
     * Logs the specified `error`.
     *
     * @param {unknown} error The specified `error` that should be logged.
     * @memberof ILogger
     */
    error(error: unknown): void

    /**
     * Logs the specified `warning` message.
     *
     * @param {AllowedMessageType} warning The specified `warning` message that should be logged.
     * @memberof ILogger
     */
    warn(warning: AllowedMessageType): void

    /**
     * Logs the specified `message`.
     *
     * @param {AllowedMessageType} message The specified `message` that should be logged.
     * @memberof ILogger
     */
    info(message: AllowedMessageType): void
}
