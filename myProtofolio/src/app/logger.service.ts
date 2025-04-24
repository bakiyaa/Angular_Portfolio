import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  info(message: string): void {
    console.info(`[INFO]: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN]: ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }
}
