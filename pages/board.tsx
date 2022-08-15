import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import BoardSection from "../components/BoardSection";


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

const Board = () => {
    const { data, loading, error } = useQuery(AllTasksQuery, {
        onCompleted: data => {
            console.log(data)
        }
    })

    const sections: Array<String> = ["Backlog", "In-Progress", "Review", "Done"];
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error.</p>

    return (
        // <Flex direction="column" pt={3} height="100vh">
        <Container pt="2rem" h='100%' maxWidth="100%" >
            <Heading fontSize="2.5rem">
                Project Title
            </Heading>
            <div className="flex-container">
                {sections.map((section: String, index: number) => {
                    let filteredData: Array<Task> = data ? data.tasks.filter((task: Task) => { return task.status === section }) : [];
                    return (
                        <BoardSection
                            title="Backlog"
                            tasks={filteredData}
                        />
                    )
                })}
            </div>
        </Container>
        // </Flex >
    )
}

export default Board;