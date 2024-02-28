import { withAuthenticator } from "@aws-amplify/ui-react";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth";
import TodoList from "./components/TodoList";
import Navigation from "./components/Navigation";

function App({ signOut, user }: WithAuthenticatorProps) {
  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <>
      <Navigation />
      <h1>Hello {user?.signInDetails?.loginId}</h1>
      {/* <button onClick={signOut}>Sign out</button> */}
    </>
  );
}

export default withAuthenticator(App);
