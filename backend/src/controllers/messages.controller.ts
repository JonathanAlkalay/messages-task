import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { MessagesService } from '../services/messages.service';
import { CreateMessageRequest, GetNextMessageResponse, QueueName } from 'common_package';

@Controller('api')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

    @Get('all-queues')
    async getAllQueues(): Promise<QueueName[]> {
      return this.messagesService.getAllQueues()
    }

    @Get(':queue_name')
    async getMessage(@Param('queue_name') queueName: QueueName): Promise<GetNextMessageResponse> {
      
      const message = await this.messagesService.getMessage(queueName)

      if (message) {
        return { message }
      }

      throw new HttpException('No message in queue', HttpStatus.NO_CONTENT)
    }

    @Post(':queue_name')
    async addMessage(@Param('queue_name') queueName: QueueName, @Body() { message }: CreateMessageRequest): Promise<void> {
      return this.messagesService.addMessage(queueName, message)
    }
}