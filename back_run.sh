#!/bin/bash
SOLUTION_DIR="Arcadia-back"
CUSTOM_PROFILE="https"

cd "$SOLUTION_DIR" || exit

dotnet watch --project "Arcadia-back.csproj" --configuration Debug --launch-profile "$CUSTOM_PROFILE"