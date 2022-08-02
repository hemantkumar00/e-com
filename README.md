# E-commerce (MERN Stack)

## Features

WaftEngine core features include:

- User Manage and Login flow
- Role Manage
- Module Manage with Access level Definition
- Access Management associated with roles
- Email Template and settings
- Media Manage and server side processing
- Error handling and log Management
- Authentication and Authorization
- Content Management
- State Management using redux
- Development ready setup
- Production ready setup

Since anything in our codebase can be extended, overwritten, or installed as a package, you may also develop, scale, and customize anything on our platform.

## Installation

- `git clone <this_url> && cd <repo_name>`
- install npm on client and server
  - `cd client`
  - `npm install`
  - `cd ../projfrontend`
  - `npm install`

- Configure Server
  - Create `.env` file in `server`
  - Update `.env` file with `MONGODB_URI=mongodb://localhost:27017/waft-engine`
- Configure Client
  - Create `.env` file in `client`
  - Update `.env` file with `VITE_API_BASE=http://localhost:8000/api/`
- Running the application in development mode
  - Development Mode (Client only): `cd client` then `npm run start` then open `http://localhost:5051` in a browser
  - Development Mode (Server only): `cd server` then `npm run start` then open `http://localhost:5050` in a browser


![home](https://user-images.githubusercontent.com/64378827/182290276-491610cd-f5e4-4b6a-9951-179311a36fd6.png)





