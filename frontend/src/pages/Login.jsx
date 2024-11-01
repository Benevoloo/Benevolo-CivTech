import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // users shouldn't be able to see the login page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    user.is_neighbor ? navigate(`/users/${user.id}/neighbor`): navigate(`/users/${user.id}/helper`); // if is_neighbor is true then it will navigate to the neighbor side
  };

  return ( <>
    <div className="p-8 bg-[#ACD5D2] flex justify-center items-center min-h-screen">
      <div className="bg-[#E6F2F1] p-10 rounded-xl shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit} aria-labelledby="login-heading">
          <h1 id="login-heading" className="text-3xl font-bold mb-8 text-center text-gray-800">
            Welcome Back!
          </h1>
          
          {/* Username */}
          <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="username" className="block text-lg font-medium text-gray-800 mb-2">Username</label>
            <input
              type="text"
              autoComplete="username"
              id="username"
              name="username"
              className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          
          {/* Password */}
          <div className="relative z-0 w-full mb-6 group">
            <label htmlFor="password" className="block text-lg font-medium text-gray-800 mb-2">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              id="password"
              name="password"
              className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in!</button>
    </form>
    {!!errorText && <p>{errorText}</p>}
    </div>
    </div>
  </>
  )
}
