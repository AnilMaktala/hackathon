import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from 'aws-amplify/auth';
import TodoList from "./components/TodoList";

function App() {

  async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
  }

  return (
    <>
      <html>
        <header>
          <h1>Hello, Amplify 👋 </h1>
          <button title='signout' onClick={handleSignOut}></button>
        </header>
        <body>


        </body>
      </html>
    </>
  );
}

export default withAuthenticator(App);