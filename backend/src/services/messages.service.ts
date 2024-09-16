import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { QueueName } from 'common_package';

@Injectable()
export class MessagesService {
  constructor(
    @InjectQueue('message-queue-a') private readonly messageQueueA: Queue,
    @InjectQueue('message-queue-b') private readonly messageQueueB: Queue,
    @InjectQueue('message-queue-c') private readonly messageQueueC: Queue,
    @InjectQueue('message-queue-d') private readonly messageQueueD: Queue,
    @InjectQueue('message-queue-e') private readonly messageQueueE: Queue
  ) {}


  async getAllQueues(): Promise<QueueName[]> {
    return ['message-queue-a', 'message-queue-b', 'message-queue-c', 'message-queue-d', 'message-queue-e']
  }
  
  async addMessage(queueName: QueueName, message: string): Promise<void> {
    const queue = this.getQueueByName(queueName)
    await queue.add(message)
  }

  async getMessage(queueName: QueueName): Promise<string | undefined> {
    
    const queue = this.getQueueByName(queueName)
    const nextMessage = await queue.getNextJob()
   
    if(!nextMessage?.name) {
      return undefined
    }

    return nextMessage.name 
  }

  private getQueueByName(queueName: QueueName): Queue | undefined {
    switch (queueName) {
      case 'message-queue-a': {
        return this.messageQueueA
      }
      case 'message-queue-b': {
        return this.messageQueueB
      }
      case 'message-queue-c': {
        return this.messageQueueC
      }
      case 'message-queue-d': {
        return this.messageQueueD
      }
      case 'message-queue-e': {
        return this.messageQueueE
      }
      default: {
        throw new Error(`Queue ${queueName} not found`);
      }
    }
  }
}