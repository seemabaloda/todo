Todo App with React and useReducer

Welcome to the Todo App! 🚀 This project is built with React and uses the useReducer hook to manage state. It’s a simple but powerful example to understand how reducers work in React for handling complex state logic.

🛠️ Features

Add tasks by typing and pressing Enter or clicking the Add Task button.

Delete tasks with a trash icon.

Clear all tasks at once.

Unique IDs generated for each task using timestamps.

📂 Folder Structure

my-todo-app/
├── src/
│   ├── App.js         # Main component
│   ├── index.js       # React entry point
│   └── styles.css     # Styling (optional)
├── public/
└── package.json      # Project dependencies

🛠️ Technologies Used

React (with Vite or Create React App)

useReducer Hook for state management

Lucide-react for icons (install with npm install lucide-react)

🚀 Getting Started

Clone the repository:

git clone https://github.com/your-username/todo-app.git
cd todo-app

Install dependencies:

npm install

Start the development server:

npm start

Open in browser:

http://localhost:3000

⚡ Usage

Add a Task: Type in the input field and press Enter or click Add Task.

Delete a Task: Click the trash icon next to a task.

Clear All Tasks: Click the Clear All button.

📂 Reducer Logic

The app uses a reducer function with the following actions:

add: Adds a new task.

remove: Removes a task by ID.

clear: Clears all tasks.

Example action object:

{ type: "add", payload: "Learn React" }

🚀 Future Enhancements

✅ Mark tasks as completed

✏️ Edit tasks

💾 Save tasks in localStorage

🎨 Add animations for adding/removing tasks
