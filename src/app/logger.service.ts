import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}
