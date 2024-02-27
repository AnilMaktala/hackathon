import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from 'aws-amplify/auth';
import TodoList from "./components/TodoList";

function App() {


  return (
    <>
      <h1>Hello, Amplify 👋</h1>
       <TodoList />
    </>
  );
}

export default withAuthenticator(App);