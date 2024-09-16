import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class MessagesService {
  constructor(
    @InjectQueue('message-queue-a') private readonly messageQueueA: Queue,
    @InjectQueue('message-queue-b') private readonly messageQueueB: Queue,
    @InjectQueue('message-queue-c') private readonly messageQueueC: Queue,
    @InjectQueue('message-queue-d') private readonly messageQueueD: Queue,
    @InjectQueue('message-queue-e') private readonly messageQueueE: Queue
  ) {}

  async addMessage(queueName: string, message: string): Promise<void> {
    const queue = this.getQueueByName(queueName)
    await queue.add(message)
  }

  async getMessage(queueName: string): Promise<any> {
    const queue = this.getQueueByName(queueName);
    const nextMessage = await queue.getNextJob();
   
    return nextMessage.data 
   
  }

  private getQueueByName(queueName: string): Queue | undefined {
    switch (queueName) {
      case 'message-queue-a':
        return this.messageQueueA;
      case 'message-queue-b':
        return this.messageQueueB;
      case 'message-queue-c':
        return this.messageQueueC;
      case 'message-queue-d':
        return this.messageQueueD;
      case 'message-queue-e':
        return this.messageQueueE;
      default:
        throw new Error(`Queue ${queueName} not found`);
      }
  }
}