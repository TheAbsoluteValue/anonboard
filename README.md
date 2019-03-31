# Anonymous Message Board Project

## Introduction
This project was created by Group 5 for CSI-2470

The message board supports storing text messages and images as well as storing and retrieving previously submitted messages. The method for sending messages relies on HTTP requests to the back-end. The database chosen to store the messages is <https://mlab.com>, a free service that uses MongoDB to store data. Several dependencies and their purpose will be discussed below.

## Front-end
The front-end relies on these dependencies:
1. React
2. Axios

### React
The reason React was chosen for the front-end was because it serves for building components easily to display to the user. Also, Will wanted to learn how to use React since he has never used it before.

### Axios
Axios was added as a dependency since it's a node package that allows you to make HTTP requests while keeping the request itself Promise based. This is important since Promises are good for handling functions asynchronously.

## Back-end
The back-end relies on these dependencies:
1. Body-parser
2. Cors
3. Express
4. Mongoose

### Body-parser
Body-parser is an essential dependency on any back-end since it allows you to parse the bodies of requests. In other words, if you want to expect the form data being submitted through the HTTP request itself, you use body-parser and it will make it easily accessible to you.

### Cors
Cors was added since it allows for Cross-Origin Resource Sharing. This means that since the front end was running on localhost:3000 and the back-end was running on localhost:3001, the front-end would otherwise be unable to request data from the back-end since it's on different ports. Cors resolvevs this issue.

### Express
Express was added because it allowed us to define the paths to which the front-end would ultimately make the HTTP requests to. This allowed us to set up use cases and determine how the incoming form data should be handled and sent back a response.

### Mongoose
Mongoose's role allowed us to make templates for data to be saved and retrieved to and from the database. For instance, the template Message defines a message body parameter, image parameter, and a date parameter. Mongoose also establishes a connection directly to the database. This allowed us to quickly retrieve all messages and their contents with a simple call to the getMessages endpoint. You can also create new messages from form data submitted from the front-end and save it to the database easily.