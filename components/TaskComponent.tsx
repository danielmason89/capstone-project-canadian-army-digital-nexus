import React, { useState } from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';


const TaskComponent: React.FC<Task> = ({ title, description, id }) => {
    return (
        <>
            <Stack className='taskContainer' mb="2rem">
                <Text>
                    {title}
                </Text>
            </Stack>
        </>
    )
}

export default TaskComponent;
