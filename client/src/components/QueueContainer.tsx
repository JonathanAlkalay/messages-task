import { QueueName } from "common_package"
import { useGetAllQueuesQuery } from "../app-state/slices/rtk-query-slices/MessagesApiSlice"
import { QueueSelector } from "./QueueSelector"
import { useState } from "react"
import { QueueMessage } from "./QueueMessage"



export const QueueContainer = () => {

    const { data: allQueues } = useGetAllQueuesQuery()

    const [selectedQueue, setSelectedQueue] = useState<QueueName>('message-queue-a')
    const handleQueueChange = (queueName: QueueName) => setSelectedQueue(queueName)

    return (
        <div>
            <QueueSelector selectedQueue={selectedQueue} handleQueueChange={handleQueueChange} allQueues={allQueues ?? []}/>
            <QueueMessage queueName={selectedQueue}/>
        </div>
    )
}