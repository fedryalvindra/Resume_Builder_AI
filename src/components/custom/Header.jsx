import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="flex justify-between p-3 px-5 shadow-sm">
      <Link to="/">
        <img width={200} height={100} src="/logo.png" alt="logo" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="outline">My CV</Button>
          </Link>
          <UserButton />{" "}
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="text-white">Get Started</Button>
        </Link>
      )}
    </header>
  );
}

export default Header;
