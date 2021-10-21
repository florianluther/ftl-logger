import { AllowedMessageType, ILogger } from '../api/logger'

export type Color = 'white' | 'grey' | 'yellow' | 'red' | 'orange' | 'green' | 'blue'

export class ConsoleLogger implements ILogger {
    log(message: AllowedMessageType, color?: Color): void {
        const fontColor: Color = color ?? 'white'
        console.log(`%c${message}`, `color: ${fontColor};`)
    }

    error(error: unknown): void {
        const color: Color = 'red'
        console.error(`%c${error}`, `color: ${color};`)
    }

    warn(warning: AllowedMessageType): void {
        const color: Color = 'yellow'
        console.warn(`%c${warning}`, `color: ${color};`)
    }

    info(message: AllowedMessageType): void {
        const color: Color = 'green'
        console.info(`%c${message}`, `color: ${color};`)
    }
}
