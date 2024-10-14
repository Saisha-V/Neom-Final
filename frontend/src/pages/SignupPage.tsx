import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('./src/assests/images/travel-background.jpg')",
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Neom Account
          </h1>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="Charlie"
                id="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="••••••••"
                id="password"
              />
            </div>

            <Link to={"/home"}>
              <button className="mt-6 w-full py-2 bg-orange-900 text-white font-semibold rounded-md hover:bg-orange-950">
                Sign Up
              </button>
            </Link>

            <Link to={"/login"}>
              <button className="mt-2 w-full py-2 bg-orange-900 text-white font-semibold rounded-md hover:bg-orange-950">
                Log In instead?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
