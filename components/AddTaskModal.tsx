import React, { useState } from "react"
import { Button, FormControl, FormLabel, FormHelperText, Input, Modal, ModalBody, ModalCloseButton, ModalOverlay, ModalFooter, ModalHeader, Text, Textarea, useDisclosure, ModalContent, Box } from "@chakra-ui/react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTaskModal = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskCreate, setTaskCreate] = useState("");

    const handleTaskCreate = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Button onClick={onOpen} width="20vw" >
                <FontAwesomeIcon icon={faPlus} style={{ "color": "#ffffff", "margin": ".5rem" }}
                />
                Add Tasks
            </Button >
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                        Idea Form
                    </ModalHeader >
                    <ModalBody>
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
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' colorScheme='teal' color="white" backgroundColor="teal" type="submit" onSubmit={handleTaskCreate}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}

export default AddTaskModal;