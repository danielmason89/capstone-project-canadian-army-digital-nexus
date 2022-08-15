import React, { useState } from "react";
import TaskComponent from "./TaskComponent";
import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

interface BoardSectionProps {
    title: String
    tasks: Array<Task>
}

const BoardSection: React.FC<BoardSectionProps> = ({ title, tasks }) => {
    return (
        <Flex flexDirection="column" flexBasis="20%" borderRadius='10px' gap="10px" p="20px"  >
            <Flex alignItems="center" justifyContent="space-between" >
                <Heading as="h2" mr="2rem">
                    {title}
                </Heading>
                <FontAwesomeIcon icon={faPlus} style={{ "color": "#6f7782" }} />
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
                                index={index}
                            />
                        )
                    })
                }
                {tasks.length > 0 &&
                    <Button width="100%">
                        <FontAwesomeIcon icon={faPlus} style={{ "padding": "2px" }} />
                        Add Task
                    </Button>
                }
            </Container>
        </Flex>
    )
}

export default BoardSection;