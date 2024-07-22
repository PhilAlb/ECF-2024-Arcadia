#!/bin/bash

# Function to clean up background jobs
cleanup() {
    echo "Cleaning up..."
    exit
}

# Trap SIGINT and SIGTERM
trap cleanup SIGINT SIGTERM

./front_run.sh &
./back_run.sh

# Wait for all background processes to finish
wait