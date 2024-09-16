import { FormControl, InputLabel, MenuItem, Select, Typography, Box } from "@mui/material";
import { QueueName } from "common_package";

interface QueueSelectorProps {
    allQueues: QueueName[];
    selectedQueue: QueueName;
    handleQueueChange: (queueName: QueueName) => void;
}

export const QueueSelector = ({ selectedQueue, handleQueueChange, allQueues }: QueueSelectorProps) => {
    
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
            width="500px"
            padding="100px 16px 16px 16px"
            margin="auto"
        >
            <Typography variant="h6" gutterBottom> Select Queue </Typography>

            <FormControl fullWidth>
                <InputLabel>Select Queue</InputLabel>
                <Select
                    value={selectedQueue}
                    onChange={(event) => handleQueueChange(event.target.value as QueueName)} label="Select Queue"
                >
                    { allQueues.map(queue => <MenuItem key={queue} value={queue}> { queue } </MenuItem> ) }
                </Select>
            </FormControl>
        </Box>
    );
}