# API Orange Network

API for Network Laranja, a web system with a home page that features a simple search bar for services. These services are registered by users, known as "Homens de Laranja". The backend API is built using NestJS and connects to a MongoDB Atlas database.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone [https://github.com/xtaveira/api-orange-network.git](https://github.com/xtaveira/api-orange-network.git)
    ```

2. Change to the project directory:
    ```sh
    cd api-orange-network
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

2. Start the application in development mode:
    ```sh
    npm run start:dev
    ```

3. The application will be running at `http://localhost:3000`.

## API Endpoints

### Users

- **Create User**
    - `POST /users`
    - Body: `{ "name": "John Doe", "orangeId": "12345", "contact": "123-456-7890", "password": "password", "email": "john@example.com", "city": "Some City", "state": "Some State" }`

- **Get All Users**
    - `GET /users`

- **Get User by ID**
    - `GET /users/:id`

- **Update User**
    - `PUT /users/:id`
    - Body: `{ "name": "John Doe", "orangeId": "12345", "contact": "123-456-7890", "password": "newpassword", "email": "john@example.com", "city": "Some City", "state": "Some State" }`

- **Delete User**
    - `DELETE /users/:id`

### Services

- **Create Service**
    - `POST /services`
    - Body: `{ "name": "Service Name", "contact": "123-456-7890", "description": "Service Description", "tags": ["tag1", "tag2"], "image": "image_url", "userId": "user_id" }`

- **Get All Services**
    - `GET /services`

- **Get Service by ID**
    - `GET /services/:id`

- **Update Service**
    - `PUT /services/:id`
    - Body: `{ "name": "Service Name", "contact": "123-456-7890", "description": "Service Description", "tags": ["tag1", "tag2"], "image": "image_url" }`

- **Delete Service**
    - `DELETE /services/:id`

## Environment Variables

The following environment variables are used in the project:

- `MONGO_URI`: The connection string for MongoDB Atlas.

## Project Structure

src/
├── app.module.ts
├── main.ts
├── modules/
│ ├── users/
│ │ ├── dto/
│ │ │ ├── create-user.dto.ts
│ │ │ ├── update-user.dto.ts
│ │ ├── schemas/
│ │ │ └── user.schema.ts
│ │ ├── users.controller.ts
│ │ ├── users.module.ts
│ │ └── users.service.ts
│ ├── services/
│ │ ├── dto/
│ │ │ ├── create-service.dto.ts
│ │ │ ├── update-service.dto.ts
│ │ ├── schemas/
│ │ │ └── service.schema.ts
│ │ ├── services.controller.ts
│ │ ├── services.module.ts
│ │ └── services.service.ts


## License

This project is licensed under the UNLICENSED License - see the [LICENSE](LICENSE) file for details.

