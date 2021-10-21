import { AllowedMessageType, ILogger } from '../api/logger'

export class NoLogger implements ILogger {
    log(_message: AllowedMessageType): void {}
    error(_error: unknown): void {}
    warn(_warning: AllowedMessageType): void {}
    info(_message: AllowedMessageType): void {}
}
