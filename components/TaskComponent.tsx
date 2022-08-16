import React, { useState } from 'react'
import {
    Box,
    Stack,
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
    useDisclosure,
    ButtonGroup,
    useBreakpointValue
} from '@chakra-ui/react';
import { gql, useMutation, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';

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


const TaskComponent: React.FC<Task> = ({ title, description, id, boardCategory, index }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDescription, setTaskDescription] = useState(description);
    const [taskCreate, setTaskCreate] = useState("");
    const variant = useBreakpointValue({ base: "outline", md: "solid" })
    const [updateTask, { data, loading, error }] = useMutation(UpdateTaskMutation);
    const [deleteTask] = useMutation(DeleteTaskMutation);

    const handleTaskUpdate = (e: { preventDefault: () => void; }) => {
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
                <Draggable draggableId={id} index={index}>
                    {(provided) => (<Button onClick={onOpen} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Box>{title}</Box>
                    </Button>)}
                </Draggable>
                <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <ModalCloseButton />
                            Update Idea
                        </ModalHeader>
                        <ModalBody>
                            <form id="new-form" onSubmit={handleTaskUpdate}>
                                <FormControl mb="3" isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input type="text" value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value); }} placeholder='Full Name' />
                                </FormControl>
                                <FormControl mb="3" isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text" value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value); }} placeholder='Description' />
                                </FormControl>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonGroup gap="2">
                                <Button variant={variant} backgroundColor="teal" colorScheme='teal' type="submit" form="new-form" onClick={handleTaskDelete}><FontAwesomeIcon icon={faTrashAlt} style={{ "padding": "4px" }} size="lg" />Delete</Button>
                                <Button variant={variant} backgroundColor="teal" colorScheme='teal' type="submit" form="new-form">Update</Button>
                            </ButtonGroup>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
        </>
    )
}

export default TaskComponent;
