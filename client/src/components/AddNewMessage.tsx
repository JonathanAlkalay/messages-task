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

    const [error, setError] = useState<boolean>(false);

    const onAddNewMessageClicked = () => {

        if(message === '') {
            setError(true)
            return
        }
        
        addNewMessageTrigger({ queueName, message })
        setMessage('')
        setError(false)
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
                color={error ? 'error': 'primary'}
                onClick={onAddNewMessageClicked}
            >
                { error ? 'Message cannot be empty': 'Add New Message' }
            </Button>
            
            <TextField
                error={error}
                label={error ? 'Message cannot be empty': 'New Message'}
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
            />

        </Box>
    );
}