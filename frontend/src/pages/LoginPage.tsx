import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<any>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        console.log("Login successful", data);
        fetchUserData(data.accessToken); // Fetch user data with the access token
      } else {
        // Handle errors (e.g., invalid credentials)
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  const fetchUserData = async (accessToken: string) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`, // Pass JWT via Authorization header
        },
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data); // Set user data to state
        console.log("User data fetched:", data);
      } else {
        setError(data.message || "Failed to fetch user data");
      }
    } catch (error) {
      setError("An unexpected error occurred while fetching user data");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-80"
        onSubmit={handleLogin}
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {userData && (
        <div className="mt-6 bg-gray-200 p-4 rounded">
          <h3 className="font-bold">User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
