import React, { useState } from "react";
import TaskComponent from "./TaskComponent";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTaskModal from "../components/AddTaskModal";
import { Droppable } from "react-beautiful-dnd";

interface BoardSectionProps {
    title: string
    tasks: Array<Task>
}

const BoardSection: React.FC<BoardSectionProps> = ({ title, tasks }) => {
    return (
        <Flex p="20px" flexDirection="column" flexBasis="20%" borderRadius='10px' gap="10px">
            <Flex alignItems="center" flexDirection="row" mt="1rem" justifyContent="space-between" >
                <Heading as="h2" size='xl' >
                    {title}
                </Heading>
                <FontAwesomeIcon icon={faPlus} style={{ "color": "#ffffff" }} />
            </Flex>
            <Droppable droppableId={title}>
                {(provided) => (
                    <Container p="0" height="100vh"
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {tasks &&
                            tasks.map((task: Task, index: number) => {
                                return (
                                    <TaskComponent
                                        title={task.title}
                                        description={task.description}
                                        id={task.id}
                                        key={task.id}
                                        boardCategory={title}
                                        index={index}
                                    />
                                )
                            })
                        }

                        {tasks.length > 0 &&
                            <Flex>
                                <Container className="add-wrapper" width="100%">
                                    <AddTaskModal
                                        boardCategory={title}
                                    />
                                </Container>
                            </Flex>
                        }

                        {
                            tasks.length === 0 &&
                            <Flex className="is-empty" flexDirection="column">
                                <Container className="add-wrapper">
                                    <AddTaskModal
                                        boardCategory={title}
                                    />
                                </Container>
                            </Flex>
                        }
                        {provided.placeholder}
                    </Container>)}
            </Droppable>
        </Flex>
    )
}

export default BoardSection;