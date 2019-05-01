import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logLevel: number;

  constructor() { }

  setLogLevel(logLevel: number = 0) {
    this.logLevel = logLevel;
  }

  getLogLevel() {
    return this.logLevel;
  }
}
