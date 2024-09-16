import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesService } from './services/messages.service';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.getOrThrow('REDIS_HOST'),
          port: configService.getOrThrow('REDIS_PORT')
        }
      }),
    }),    BullModule.registerQueue(
      { name: 'message-queue-a' },
      { name: 'message-queue-b' },
      { name: 'message-queue-c' },
      { name: 'message-queue-d' },
      { name: 'message-queue-e' }
    )  
  ],
  controllers: [MessagesController],
  providers: [MessagesService, ConfigService],
})
export class AppModule {}




