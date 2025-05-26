## 🚀 Expo Prototype Starter Script

This repo includes a helper script `expo-prototype-starter.sh` that bootstraps a new Expo + TypeScript project with your preferred setup and folder structure — perfect for rapid prototyping.

---

### 📦 What It Does

When you run the script, it will:

1. Prompt you for an app name.
2. Create a new Expo project using the **blank TypeScript template**.
3. Install the following common dependencies:

   - `react-native-reanimated`
   - `react-native-svg`
   - `react-native-gesture-handler`
   - `react-native-screens`
   - `react-native-safe-area-context`
   - `zustand`
   - `@react-navigation/native`
   - `@react-navigation/native-stack`
   - `@react-navigation/bottom-tabs`
   - `react-native-paper`
   - `date-fns`
   - `@gorhom/bottom-sheet@^5`

4. Copy your custom starter files from `template-files/` into the newly created project:
   - `navigation/`, `constants/`, `components/`, `data/`, `types/` → into `source/`
   - Custom `App.tsx` → replaces the root app entry file

---

### 🧰 Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) and `npm` installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- Bash shell (macOS, Linux, WSL, or Git Bash on Windows)

---

### ▶️ How to Use

1. Clone this repo:  
   `git clone https://github.com/slavkolukic/expo-prototype-starter.git && cd expo-prototype-starter`

2. Run the script:  
   `./expo-prototype-starter.sh`

3. Enter your desired app name when prompted.

4. When it's done, go into your new app folder:  
   `cd your-app-name && npx expo start`
