

export interface CreateMessageRequest {
    message: string;
}

export interface GetNextMessageResponse {
    message: string;
}

export type QueueName = 'message-queue-a' | 'message-queue-b' | 'message-queue-c' | 'message-queue-d' | 'message-queue-e';