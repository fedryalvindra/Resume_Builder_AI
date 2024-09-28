import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const cards = [
  "Get started by login",
  "Define CV title",
  "Customize your own CV",
  "Using AI for suggestions",
  "Download your CV",
  "Share to your friends, family, or HR",
];

function Home() {
  const { user, isSignedIn } = useUser();

  return (
    <div>
      <Header />
      <div className="my-20 flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-xs font-medium sm:text-base">
            CV Maker AI
          </p>
          <h1 className="text-center text-lg font-semibold sm:text-3xl md:text-4xl">
            Get your CV. Make it simple by using AI
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-xs sm:text-sm">
            Get started. Make your CV. Download & Share your CV
          </p>
          {isSignedIn ? (
            <Link to="/dashboard">
              <Button>Start Now</Button>
            </Link>
          ) : (
            <Link to="/auth/sign-in">
              <Button>Start Now</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="mx-10 grid grid-cols-2 gap-4 rounded-xl bg-zinc-100 px-5 py-5 md:grid-cols-3 md:px-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className="transform cursor-pointer rounded-lg border border-slate-100 bg-white p-6 shadow-md transition-transform hover:scale-105 hover:bg-slate-50 hover:shadow-lg"
          >
            <p className="text-xs font-semibold text-gray-700 sm:text-sm">
              {card}
            </p>
          </div>
        ))}
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-center text-lg font-semibold sm:text-2xl md:text-3xl">
          Developers
        </h1>
        <div className="my-5 grid grid-cols-1 gap-5 text-zinc-700 md:grid-cols-3 md:gap-10">
          <div>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/brainard-setiawan-89545b24b/"
              target="_blank"
            >
              <h2 className="text-center font-bold">
                Brainard Fibert Setiawan
              </h2>
            </a>
          </div>
          <div>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/fedry-alvindra-767712251/"
              target="_blank"
            >
              <h2 className="text-center font-bold">Fedry Alvindra</h2>
            </a>
          </div>
          <div>
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/jeremia-abner-848534268/"
            >
              <h2 className="text-center font-bold">
                Jeremia Abner Kristianto
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-center text-lg font-semibold sm:text-2xl md:text-3xl">
          AI for Suggestion
        </h1>
        <p className="text-center text-xs sm:text-sm">
          Suggest your summery using AI
        </p>
        <img
          className="w-5/6 sm:w-4/6 md:w-3/6"
          src="AI-Suggestion.png"
          alt="ai-suggestion"
        />
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-center text-lg font-semibold sm:text-2xl md:text-3xl">
          CV result using our services
        </h1>
        <p className="mb-5 text-center text-xs sm:text-sm">
          Download & Share your CV
        </p>
        <div className="flex items-center justify-center bg-zinc-100 py-10">
          <img
            className="w-5/6 border transition-all hover:scale-105 sm:w-4/6 md:w-3/6"
            src="CV-Result.jpg"
            alt="cv-result"
          />
        </div>
      </div>
      <footer className="flex h-20 items-center bg-zinc-100 px-10 font-medium">
        &copy; CV Maker AI
      </footer>
    </div>
  );
}

export default Home;
