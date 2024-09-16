import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesService } from './services/messages.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'localhost', port: 6379 } }),
    BullModule.registerQueue(
      { name: 'message-queue-a' },
      { name: 'message-queue-b' },
      { name: 'message-queue-c' },
      { name: 'message-queue-d' },
      { name: 'message-queue-e' }
    )  
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class AppModule {}




