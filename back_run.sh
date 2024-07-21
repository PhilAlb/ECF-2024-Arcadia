#!/bin/bash
SOLUTION_DIR="ECF-2024-Arcadia/Arcadia-back"
CUSTOM_PROFILE="https"

cd "$SOLUTION_DIR" || exit

dotnet watch --project "Arcadia-back.csproj" --configuration Debug --launch-profile "$CUSTOM_PROFILE"