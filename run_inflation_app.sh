#!/bin/bash

# Helper functions for colored output
function print_info() {
    echo -e "\e[32m$1\e[0m"
}

function print_warning() {
    echo -e "\e[33m$1\e[0m"
}

function print_error() {
    echo -e "\e[31m$1\e[0m"
}

# Configuration
FRONTEND_PORT=3000
BACKEND_PORT=8080
MYSQL_CONTAINER_NAME="inflabudget-db"

# Step 1: Check if Docker is installed
print_info "Checking if Docker is installed..."
if ! [ -x "$(command -v docker)" ]; then
    print_error "Docker is not installed. Please install Docker and try again."
    exit 1
else
    print_info "Docker is installed."
fi

# Step 2: Check Docker permissions
print_info "Checking Docker permissions..."
if ! docker info >/dev/null 2>&1; then
    print_warning "You don't have permission to run Docker. Adding your user to the Docker group..."
    sudo usermod -aG docker $USER
    newgrp docker
fi

# Step 3: Check if the MySQL Docker container already exists
if [ "$(docker ps -a -q -f name=${MYSQL_CONTAINER_NAME})" ]; then
    print_warning "The Docker container '${MYSQL_CONTAINER_NAME}' already exists."
    read -p "Do you want to delete it and create a new one? (y/n): " delete_container
    if [[ "$delete_container" == "y" || "$delete_container" == "Y" ]]; then
        docker rm -f "${MYSQL_CONTAINER_NAME}"
        print_info "Old container deleted."
    else
        print_error "Exiting the script."
        exit 1
    fi
fi

# Step 4: Build and run the MySQL Docker container
print_info "Building the MySQL Docker image..."
docker build -t inflabudget-mysql .

print_info "Starting the MySQL Docker container..."
docker run --name inflabudget-db -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d inflabudget-mysql

# Step 5: Wait for MySQL to be ready
print_info "Waiting for MySQL to be ready..."
until docker exec inflabudget-db mysqladmin ping -h "localhost" --silent; do
    echo "Waiting for database connection..."
    sleep 2
done
print_info "MySQL is ready."

# Step 6: Check if anything is running on the frontend port
if lsof -i:${FRONTEND_PORT}; then
    print_warning "Something is already running on port ${FRONTEND_PORT} (Frontend)."
    read -p "Do you want to stop it and continue? (y/n): " stop_frontend
    if [[ "$stop_frontend" == "y" || "$stop_frontend" == "Y" ]]; then
        fuser -k "${FRONTEND_PORT}/tcp"
        print_info "Stopped the process running on port ${FRONTEND_PORT}."
    else
        print_error "Exiting the script."
        exit 1
    fi
fi

# Step 7: Check if anything is running on the backend port
if lsof -i:${BACKEND_PORT}; then
    print_warning "Something is already running on port ${BACKEND_PORT} (Backend)."
    read -p "Do you want to stop it and continue? (y/n): " stop_backend
    if [[ "$stop_backend" == "y" || "$stop_backend" == "Y" ]]; then
        fuser -k "${BACKEND_PORT}/tcp"
        print_info "Stopped the process running on port ${BACKEND_PORT}."
    else
        print_error "Exiting the script."
        exit 1
    fi
fi

# Step 8: Start the backend in a new terminal
print_info "Starting the backend in a new terminal..."
gnome-terminal -- bash -c "
    cd ./InflationManagementBackEnd || { echo 'Backend directory not found.'; exit 1; }
    mvn spring-boot:run;
    exec bash
"

# Step 9: Start the frontend in another new terminal
print_info "Starting the frontend in a new terminal..."
gnome-terminal -- bash -c "
    cd ./inflationmanagementfrontend || { echo 'Frontend directory not found.'; exit 1; }
    npm install;
    npm start;
    exec bash
"

print_info "Application is up and running! 🚀"

