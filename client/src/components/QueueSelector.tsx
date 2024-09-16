import { QueueName } from "common_package"




interface QueueSelectorProps {
    allQueues: QueueName[]
}
export const QueueSelector = ({ }: QueueSelectorProps) => {
    return (
        <div>
            <h1>Queue Selector</h1>
        </div>
    )
}