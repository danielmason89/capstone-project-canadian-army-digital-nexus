import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Center, Container, Heading, Spinner } from "@chakra-ui/react";
import BoardSection from "../components/BoardSection";
import { DragDropContext } from "react-beautiful-dnd";


const AllTasksQuery = gql`
    query {
        tasks{
            id
            title
            description
            status
        }
    }
`
const UpdateTaskMutation = gql`
mutation UpdateTask($id: String!, $title: String!, $description: String!, $status: String!, $userId: String) {
    updateTask(id: $id, title: $title, description: $description, status:$status, userId: $userId) {
        id
        title
        description
        status
    }
}`

const Board = () => {
    const { data, loading, error } = useQuery(AllTasksQuery, {
        onCompleted: data => {
            console.log(data)
            setTasks(data.tasks)
        }
    });
    const [tasks, setTasks] = useState([]);
    const sections: Array<String> = ["Backlog", "In-Progress", "Review", "Done"];
    const [updateTask] = useMutation(UpdateTaskMutation);

    const onDragEnd = (result: { destination: any; source: any; draggableId: any; }) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }
        updateTask({
            variables: {
                id: draggableId,
                status: destination.droppableId
            }
        })
    }

    if (loading) return <Center h='100px'><Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        className="loader"
    /></Center>
    if (error) return <p>Error...</p>

    return (
        // <Flex direction="column" pt={3} height="100vh">
        <Container pt="2rem" h='100%' maxWidth="100%" >
            <Heading fontSize="2.5rem">
                Working Title
            </Heading>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex-container">
                    {sections.map((section: String, index: number) => {
                        let filteredData: Array<Task> = data ? data.tasks.filter((task: Task) => { return task.status === section }) : [];
                        return (
                            <BoardSection
                                title={section}
                                key={index}
                                tasks={filteredData}

                            />
                        )
                    })}
                </div>
            </DragDropContext>
        </Container>
        // </Flex >
    )
}

export default Board;