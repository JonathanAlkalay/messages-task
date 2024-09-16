import React, { useState } from 'react';
import { QueueName } from "common_package";
import { useAddMessageMutation } from "../app-state/slices/rtk-query-slices/MessagesApiSlice";
import { Button, TextField, Typography, Box } from "@mui/material";

interface AddNewMessageProps {
    queueName: QueueName;
}
export const AddNewMessage = ({ queueName }: AddNewMessageProps) => {
    
    const [message, setMessage] = useState<string>('');
    const [addNewMessageTrigger] = useAddMessageMutation();

    const onAddNewMessageClicked = () => {
        addNewMessageTrigger({ queueName, message })
        setMessage('')
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%" 
        >

            <Button
                variant="contained"
                color="primary"
                onClick={onAddNewMessageClicked}
            >
                Add New Message
            </Button>
            
            <TextField
                label="New Message"
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
            />

        </Box>
    );
}