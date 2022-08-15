import React, { useState } from "react";
import TaskComponent from "./TaskComponent";
import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTaskModal from "../components/AddTaskModal";

interface BoardSectionProps {
    title: String
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
            <Container p="0" height="100vh">
                {tasks &&
                    tasks.map((task: Task, index: number) => {
                        return (
                            <TaskComponent
                                title={task.title}
                                description={task.description}
                                id={task.id}
                                key={task.id}
                            />
                        )
                    })
                }
                {tasks.length > 0 &&
                    <Flex>
                        <Button className="add-wrapper" width="100%">
                            <AddTaskModal
                                boardCategory={title}
                            />
                        </Button>

                    </Flex>
                }
                {
                    tasks.length === 0 &&
                    <Flex className="is-empty" flexDirection="column">
                        <Button className="add-wrapper">
                            <AddTaskModal
                                boardCategory={title}
                            />
                        </Button>
                    </Flex>
                }
            </Container>
        </Flex>
    )
}

export default BoardSection;