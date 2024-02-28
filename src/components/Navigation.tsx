import { useState, useEffect } from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import logo from "../aws.png";
import { getCurrentUser } from "aws-amplify/auth";
import { signOut } from "aws-amplify/auth";
export default function Navigation(handleUserProfileAction) {
  const [user, setUser] = useState("");
  async function currentAuthenticatedUser() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();

      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails?.loginId}`);
      setUser(signInDetails?.loginId);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {}, [currentAuthenticatedUser]);
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "Hackathon",
        logo: {
          src: logo,
          alt: "Hackathon",
        },
      }}
      utilities={[
        {
          type: "button",
          title: "Judges",
          text: "Judges",
        },
        {
          type: "button",
          title: "Ideas",
          text: "Ideas",
        },
        {
          type: "button",
          title: "Teams",
          onClick: currentAuthenticatedUser,
          text: "Teams",
        },
        {
          type: "menu-dropdown",
          text: user,
          description: user,
          iconName: "user-profile",
          onItemClick: signOut,
          items: [
            { id: "profile", text: "Profile" },
            { id: "signout", text: "Sign out" },
          ],
        },
      ]}
    />
  );
}
