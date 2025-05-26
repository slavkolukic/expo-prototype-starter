#!/bin/bash
set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

TEMPLATE_DIR="../template-files"
DEST_DIR="./source"

# Prompt for app name
read -p "Enter the name of your new Expo app: " appname

# Check if app name is empty
if [ -z "$appname" ]; then
  echo -e "${RED}❌ App name cannot be empty.${NC}"
  exit 1
fi

# Check if directory already exists
if [ -d "$appname" ]; then
  echo -e "${RED}❌ Directory '$appname' already exists. Please choose a different app name.${NC}"
  exit 1
fi

# Step 1: Create the Expo app
echo -e "${GREEN}🚀 Creating Expo app named '$appname'...${NC}"
npx create-expo-app@latest "$appname" --template blank-typescript

# Step 2: Navigate into the app directory
cd "$appname"

# Step 3: Install packages
echo -e "${GREEN}📦 Installing dependencies...${NC}"
npx expo install react-native-reanimated
npx expo install react-native-svg
npx expo install react-native-gesture-handler
npx expo install react-native-screens react-native-safe-area-context

npm install zustand @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-paper date-fns @gorhom/bottom-sheet@^5

# Step 4: Copy template files into source/
echo -e "${GREEN}📁 Copying template files to source/...${NC}"

mkdir -p "$DEST_DIR"

cp -r "$TEMPLATE_DIR/navigation" "$DEST_DIR/"
cp -r "$TEMPLATE_DIR/constants" "$DEST_DIR/"
cp -r "$TEMPLATE_DIR/components" "$DEST_DIR/"
cp -r "$TEMPLATE_DIR/types" "$DEST_DIR/"
cp -r "$TEMPLATE_DIR/data" "$DEST_DIR/"
cp -f "$TEMPLATE_DIR/App.tsx" ./App.tsx

echo -e "${GREEN}✅ Setup complete! Your project '$appname' is ready.${NC}"
