Multi-Step Profile Management App (React Native + Redux)
A robust React Native application built with TypeScript and Redux Toolkit to manage user profiles through a structured 3-step form flow.

🚀 Features
Multi-Step Form:


Step 1: Basic Info (Name, Email, Age).


Step 2: Address Info (City, State, Country).


Step 3: Summary & Review before final submission.

State Management: Entirely managed via Redux Toolkit. Uses a "draft" state to ensure data continuity when navigating between form steps.



Full CRUD: View, Create, Edit, and Delete profiles directly from the Home Screen.



Type Safety: Fully implemented with TypeScript interfaces for state, actions, and navigation props.

🛠️ Tech Stack

Framework: React Native (Functional Components).


Language: TypeScript.


State Management: Redux Toolkit (@reduxjs/toolkit).


Navigation: React Navigation (Native Stack).

Project Structure
src/
 ├── navigation/   # Stack navigation configuration
 ├── screens/      # HomeScreen, Step1, Step2, and Summary components
 ├── store/        # Redux store and profileSlice logic
⚙️ Setup Instructions
Clone the repository:

Bash

git clone <your-repo-link>
cd <project-folder>
Install dependencies:

Bash

npm install
Run the application:

For Android: npx react-native run-android

For iOS: npx react-native run-ios

📝 Assumptions

IDs: Profile IDs are uniquely generated using Date.now().toString() since no backend is connected.


Validation: Basic required field validation is implemented to prevent empty profile submissions.


Persistence: Data is stored in the local Redux state and will reset if the app is hard-restarted (unless AsyncStorage bonus is implemented).