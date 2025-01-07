#!/bin/bash

# Helper function to print colored output
function print_info() {
    echo -e "\e[32m$1\e[0m"
}

function print_error() {
    echo -e "\e[31m$1\e[0m"
}

# Step 1: Check if Docker is installed
print_info "Checking if Docker is installed..."
if ! [ -x "$(command -v docker)" ]; then
    print_error "Docker is not installed. Please install Docker and try again."
    exit 1
else
    print_info "Docker is installed."
fi

# Step 2: Build and run the MySQL Docker container
print_info "Building the MySQL Docker image..."
docker build -t inflabudget-mysql .

print_info "Starting the MySQL Docker container..."
docker run --name inflabudget-db -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d inflabudget-mysql

if [ $? -eq 0 ]; then
    print_info "MySQL container started successfully on port 3306."
else
    print_error "Failed to start the MySQL container."
    exit 1
fi

# Step 3: Start the backend in a new terminal
print_info "Starting the backend in a new terminal..."
gnome-terminal -- bash -c "
    cd ./InflationManagementBackEnd || { echo 'Backend directory not found.'; exit 1; }
    mvn spring-boot:run;
    exec bash
"

# Step 4: Start the frontend in another new terminal
print_info "Starting the frontend in a new terminal..."
gnome-terminal -- bash -c "
    cd ./inflationmanagementfrontend || { echo 'Frontend directory not found.'; exit 1; }
    npm install;
    npm start;
    exec bash
"

print_info "Application is up and running! 🚀"

