import { CreateMessageRequest, GetNextMessageResponse, QueueName } from "common_package";
import RootApiSlice from "./RootApiSlice";

const MessagesApiSlice = RootApiSlice.injectEndpoints({
  endpoints: builder => ({

    getAllQueues: builder.query<QueueName[], void>({
        query: () => {
            return {
                url: `api/all-queues`,
                method: 'GET'
            }
        }
    }),

    getNextMessage: builder.query<GetNextMessageResponse, GetNextMessageRequest>({
        query: ({ queueName }) => {
            return {
                url: `api/${queueName}`,
                method: 'GET'
            }
        }
    }),

    addMessage: builder.mutation<void, CreateMessageRequestWithQueueName>({
        query: ({ queueName, message }) => {
            return {
                url: `api/${queueName}`,
                method: 'POST',
                body: { message }
            }
        }
    })

  })
})

interface GetNextMessageRequest {
    queueName: QueueName
}

interface CreateMessageRequestWithQueueName extends CreateMessageRequest {
    queueName: QueueName
}

export const {
    useGetAllQueuesQuery,
    useLazyGetNextMessageQuery,
    useAddMessageMutation
} = MessagesApiSlice