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
    Modal,
    Button,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    FormControl,
    Input,
    FormLabel,
    ModalFooter,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react';
import { gql, useMutation, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const UpdateTaskMutation = gql`
mutation UpdateTask($id: String!, $title: String!, $description: String!, $status: String!, $userId: String) {
    updateTask(id: $id, title: $title, description: $description, status:$status, userId: $userId) {
        id
        title
        description
        status
    }
}`

const DeleteTaskMutation = gql`
mutation DeleteTaskMutation($id: String!) {
    deleteTask(id: $id) {
        id
    }
}
`


const TaskComponent: React.FC<Task> = ({ title, description, id, boardCategory }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCreate, setTaskCreate] = useState("");

    const [updateTask, { data, loading, error }] = useMutation(UpdateTaskMutation);
    const [deleteTask] = useMutation(DeleteTaskMutation);

    const handleTaskUpdate = (e) => {
        e.preventDefault();
        updateTask({
            variables: {
                title: taskTitle,
                description: taskDescription,
                id: id,
                status: boardCategory,
            }
        })
    }

    const handleTaskDelete = () => {
        deleteTask({
            variables: {
                id: id
            }
        })
    }

    return (
        <>
            <Stack className='taskContainer' mb="2rem">
                <Button onClick={onOpen}  >
                    {title}
                </Button >
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <ModalCloseButton />
                            Update Idea Form
                        </ModalHeader >
                        <ModalBody>
                            <form id="new-form" onSubmit={handleTaskUpdate}>
                                <FormControl mb="3" isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input type="text" value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} placeholder='Full Name' />
                                </FormControl>
                                <FormControl mb="3" isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text" value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} placeholder='Description' />
                                </FormControl>
                                <FormControl mb="3" isRequired>
                                    <FormLabel>Suggest Idea</FormLabel>
                                    <Input value={taskCreate} onChange={(e) => { setTaskCreate(e.target.value) }} placeholder='Idea' />
                                </FormControl>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Flex alignItems="center">
                                <Button variant='ghost' colorScheme='teal' color="white" backgroundColor="teal" type="submit" form="new-form">Update</Button>
                                <FontAwesomeIcon icon={faTrashAlt} style={{ "padding": "2px" }} size="lg" onClick={handleTaskDelete} />
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal >
            </Stack>
        </>
    )
}

export default TaskComponent;
