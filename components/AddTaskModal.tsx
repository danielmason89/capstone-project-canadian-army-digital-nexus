import React, { useState } from "react"
import { Button, FormControl, FormLabel, FormHelperText, Input, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalFooter, ModalHeader, Text, Textarea, useDisclosure, ModalContent, Box } from "@chakra-ui/react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateTaskMutation = gql`
mutation CreateTask($id: String, $title: String!, $description: String!, $status: String!, $userId: String) {
    createTask(id: $id, title: $title, description: $description, status:$status, userId: $userId) {
        id
        title
        description
        status
    }
}`

const AddTaskModal = ({ boardCategory }: { boardCategory: String; }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskCreate, setTaskCreate] = useState("");

    const [createTask, { data, loading, error }] = useMutation(CreateTaskMutation, {
        onCompleted: (data) => {
            setTaskTitle("");
            setTaskDescription("");
            setTaskCreate("");
        }
    })

    const handleTaskCreate = (e) => {
        e.preventDefault()
        createTask({
            variables: {
                title: taskTitle,
                description: taskDescription,
                status: boardCategory
            }
        })
    }
    return (
        <>
            <Button onClick={onOpen} width="20vw" >
                <FontAwesomeIcon icon={faPlus} style={{ "color": "#ffffff", "margin": ".5rem" }}
                />
                Add Ideas
            </Button >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                        Idea Form
                    </ModalHeader >
                    <ModalBody>
                        <form id="new-form" onSubmit={handleTaskCreate}>
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
                        <Button variant='ghost' colorScheme='teal' color="white" backgroundColor="teal" type="submit" form="new-form">Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}

export default AddTaskModal;