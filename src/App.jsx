import { useUser } from "@clerk/clerk-react";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/toaster";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) return <Navigate to="/auth/sign-in" />;
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="flex h-60 items-center justify-center">
            <p>Please wait...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
