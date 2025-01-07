FROM mysql:8.0

# Copy your SQL scripts to the Docker image
COPY ./scripts/init.sql /docker-entrypoint-initdb.d/

# Set default environment variables
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=inflabudget
