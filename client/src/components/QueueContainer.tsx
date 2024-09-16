import React, { useState } from "react";
import { QueueName } from "common_package";
import { useGetAllQueuesQuery } from "../app-state/slices/rtk-query-slices/MessagesApiSlice";
import { QueueSelector } from "./QueueSelector";
import { QueueMessage } from "./QueueMessage";
import { AddNewMessage } from "./AddNewMessage";
import { Box } from "@mui/material";

export const QueueContainer = () => {
    const { data: allQueues } = useGetAllQueuesQuery();
    const [selectedQueue, setSelectedQueue] = useState<QueueName>('message-queue-a');

    const handleQueueChange = (queueName: QueueName) => setSelectedQueue(queueName);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="500px"
            margin="0 auto"
            padding="200px 16px 16px 16px" 
            gap={10}
        >
            <QueueSelector
                selectedQueue={selectedQueue}
                handleQueueChange={handleQueueChange}
                allQueues={allQueues ?? []}
            />
            <AddNewMessage queueName={selectedQueue} />
            <QueueMessage queueName={selectedQueue} />
        </Box>
    );
};