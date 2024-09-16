import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { MessagesService } from '../services/messages.service';

@Controller('queue')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

    @Post(':queue_name')
    async addMessage(@Param('queue_name') queueName: string, @Body() { message }): Promise<void> {
      return this.messagesService.addMessage(queueName, message);
    }
  
    @Get(':queue_name')
    async getMessage(@Param('queue_name') queueName: string): Promise<any> {
      
      const message = await this.messagesService.getMessage(queueName);
  
      if (message) {
        return message;
      }
  
      throw new HttpException('No message in queue', HttpStatus.NO_CONTENT);
    }
}