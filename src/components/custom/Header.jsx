import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="flex justify-between p-3 px-5 shadow-md">
      <img width={200} height={100} src="/logo.png" alt="logo" />
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
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
