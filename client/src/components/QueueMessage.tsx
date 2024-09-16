import { QueueName } from "common_package";
import { useLazyGetNextMessageQuery } from "../app-state/slices/rtk-query-slices/MessagesApiSlice";
import { Box, Button, Typography } from "@mui/material";




interface QueueMessageProps {
    queueName: QueueName;
}
export const QueueMessage = ({ queueName }: QueueMessageProps) => {

    const [getMessageTrigger, { data: message, isLoading, isError, isSuccess }] = useLazyGetNextMessageQuery()

    const getNextMessage = () => {
        getMessageTrigger({ queueName })
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%" 
            padding="16px"
            gap={5}
        >
            <Button
                variant="contained"
                color="primary"
                onClick={getNextMessage}
                disabled={isLoading}
            >
                Get Next Message
            </Button>

            { isLoading && <Typography variant="body1">Loading...</Typography> }
            { isError && <Typography variant="body1" color="error">Failed to load message</Typography> }
            { isSuccess && <Typography variant="body1"> { message?.message ?? '' } </Typography> }
        </Box>
    );
}