## Canadian Army Digital Nexus - Capstone Project

## Introduction
A governance application that enables people from across an organization at all levels to submit innovation ideas for subsequent prioritization and resourcing.

## What your application does:
This application can be used across an organization for idea management and prioritization over time.

## Why you used the technologies you used?
I chose to use the React framework, Next.js, alongside a Postgresql database, and Apollo Graphql and Prisma orm to abstaract some of the set-up that would be otherwise required for working with plain react. I made use of these to query the database in a more efficient way were this app to continue being used and further build out in reaction to the inefficiencies of a REST-Api

## Some of the challenges faced and features to implement in the future:
 - Figuring out the right framework to use, and weghing the positives against the negatives
 - Looking over the database landscape and figuring out what type of database to use; relational versus document:
 the difference being that MongoDB is a non-relational database, while PostgreSQL is a relational database. While NoSQL databases work on storing data in key-value pairs  as one record, relational databases store data on different tables.
 - Looking over the different React based component libraries and choosing one that best fit the needs of the application.
 - Having an organizations idea or a organic datset displayed in the dashboard

## Prerequisites
Node and npm are installed for this application. Here are the versions I'll be used while making this tutorial:

$ node --version
v16.13.2

$ npm --version
8.1.2
Installing npm adds two commands to the system—npm and npx—both of which I'll be using while making the app.

## In order to install the app onto your local machine and add to it, the steps to take are:

1. Create a folder to house your version of the project.
2. Go to the GitHub repo page, and copy the string => thhttps://github.com/danielmason89/capstone-project-canadian-army-digital-nexus.git, and have it be preceded with    git clone.
3. Once the project has been cloned to a local machine, the next step would be to preform an npm i or npm install.
4. Then to get thing up an running on your local machine, there are dev scripts that can be ran to run the application in development.
5. When making pushes during development make sure to work in a separate branch since each update will impact the app since it is live,.


## Needs: 
 - internet-facing web applications, that’s mobile friendly
 - That is highly intuitive/user-friendly
 - Facilitates idea intake, transparent, and organisational-wide understanding of what is being submitted
 - Provides the ability to offer feedback and ask questions to idea submittors
 - Automatic scoring based on predefined criteria to output a prioritisation list

This app is envisioned as a ui where lists of ideas are being used in subsequent steering committees.
In order to help decide which ideas to fund/resource to test validity before scaling up and out across the organisation.


