import { useGetAllQueuesQuery } from "../app-state/slices/rtk-query-slices/MessagesApiSlice"



export const QueueContainer = () => {

    const { data: allQueues } = useGetAllQueuesQuery()
    
    return (
        <div>
            <h1>Queue Container</h1>
        </div>
    )
}