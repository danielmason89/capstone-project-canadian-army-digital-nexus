import React, { useState, ReactNode } from 'react'
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
            <Stack className='taskContainer'
                rounded={'x1.5'}

            >
                <Text className='card'
                    boxShadow="0px 0px 15px 11px #a39b9b4c"
                    p="8px"
                    >
                    {title}
                </Text>
            </Stack>

        </>
    )
}

export default TaskComponent;
