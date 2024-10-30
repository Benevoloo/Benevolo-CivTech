// import { useContext, useState } from "react";
// import { useNavigate, Navigate, Link } from "react-router-dom";
// import CurrentUserContext from "../contexts/current-user-context";
// import { createUser } from "../adapters/user-adapter";
// import Apps from "./IdUpload";

// // Controlling the sign up form is a good idea because we want to add (eventually)
// // more validation and provide real time feedback to the user about usernames and passwords
// export default function SignUpNeighbor() {
//   const navigate = useNavigate();
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//   const [errorText, setErrorText] = useState('');
//   // user personal info -- name and location 
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [zipcode, setZipcode] = useState('');
//   //email or number for contacting 
//   const [contact_info, setContactInfo] = useState('');
//   //bio
//   const [bio, setBio] = useState('');

//   //kind of user (is neigbor? is helper?)
//   // const [is_neighbor, setIs_Neighbor] = useState(true)

//   const is_neighbor = true




//   // users shouldn't be able to see the sign up page if they are already logged in.
//   // if the currentUser exists in the context, navigate the user to 
//   // the /users/:id page for that user, using the currentUser.id value
//   if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

//   const handleSubmit = async (event) => {
//     //preventing it from refreshing
//     event.preventDefault();
//     setErrorText('');

//     if (!username || !password) return setErrorText('Missing username or password');

//     const [user, error] = await createUser({ username, password, name, contact_info, zipcode, bio, is_neighbor });
//     if (error) return setErrorText(error.message);

//     console.log(errorText)

// setCurrentUser(user);
// navigate(`/users/${user.id}/neighbor`);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'name') setName(value);
//     if (name === 'username') setUsername(value);
//     if (name === 'password') setPassword(value);
//     if (name === 'zipcode') setZipcode(value);
//     if (name === 'contact-info') setContactInfo(value);
//     if (name === 'bio') setBio(value);

//   };

//   return <>
//     <h1>Sign Up</h1>
//     <form class="max-w-md mx-auto">
//       {/* Name */}
//     <div class="relative z-0 w-full mb-5 group">
//       <input 
//       type="text" 
//       name="name" 
//       id="name" 
//       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer space-y-4" 
//       placeholder="" 
//       required 
//       autoComplete="off"
//       onChange={handleChange}
//       value={name}
//       />
//       <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
//   </div>



// {/* Username */}
//   <div class="relative z-0 w-full mb-5 group">
//       <input 
//       type="text" 
//       name="username" 
//       id="username" 
//       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder="" 
//       required 
//       autoComplete="off"
//       onChange={handleChange}
//       value={username}
//       />
//       <label for="username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//   </div>

// {/* Password */}

//   <div class="relative z-0 w-full mb-5 group">
//       <input 
//       type="password" 
//       name="password" 
//       id="password" 
//       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder="" 
//       required 
//       autoComplete="off"
//       onChange={handleChange}
//       value={password}
//       />
//       <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//   </div>



//  {/* ZipCode & Contact Info */}
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input 
//         type="integer" 
//         name="zipcode" 
//         id="zipcode" 
//         class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//         placeholder=" " 
//         required
//         maxLength={5} />
//         <label for="zipcode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ZipCode (10001)</label>
//     </div>

//     <div class="relative z-0 w-full mb-5 group">
//         <input 
//         type="text" 
//         name="contact-info" 
//         id="contact-info"

//         class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//         placeholder=" " 
//         required 
//         maxLength={10}/>
//         <label for="contact-info" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Info (123-456-7890)</label>
//     </div>
//   </div>




// {/* Bio */}
//   <div class="relative z-0 w-full mb-5 group">
//       <input 
//       type="text" 
//       name="bio" 
//       id="bio" 
//       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
//       placeholder="" 
//       required 
//       autoComplete="off"
//       onChange={handleChange}
//       value={bio}
//       />
//       <label for="bio" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about yourself</label>
//   </div>


//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up Now</button>
//   </form>
//   </>;

//       {!!errorText && <p>{errorText}</p>}
//       <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
// }



import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import Apps from "./IdUpload";

export default function SignUpNeighbor() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  // user personal info -- name and location 
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  //email or number for contacting 
  const [contact_info, setContactInfo] = useState('');
  //bio
  const [bio, setBio] = useState('');

  const is_neighbor = true;

  // users shouldn't be able to see the sign up page if they are already logged in.
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    // Preventing default form submission
    event.preventDefault();
    setErrorText('');

    if (!username || !password) {
      return setErrorText('Missing username or password');
    }

    const [user, error] = await createUser({ username, password, name, contact_info, zipcode, bio, is_neighbor });
    if (error) {
      return setErrorText(error.message);
    }

    // Setting the current user and navigating to their profile
    setCurrentUser(user);
    navigate(`/users/${user.id}/neighbor`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'zipcode') setZipcode(value);
    if (name === 'contact-info') setContactInfo(value);
    if (name === 'bio') setBio(value);
  };

  return (
    <>
    <div className="p-6 bg-orange-300 flex justify-center items-center min-h-screen">
     <div className="bg-slate-100 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="name" 
            id="name" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer space-y-4" 
            placeholder="" 
            required 
            autoComplete="off"
            onChange={handleChange}
            value={name}
          />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
        </div>

        {/* Username */}
        <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="username" 
            id="username" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder="" 
            required 
            autoComplete="off"
            onChange={handleChange}
            value={username}
          />
          <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
        </div>

        {/* Password */}
        <div className="relative z-0 w-full mb-5 group">
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder="" 
            required 
            autoComplete="off"
            onChange={handleChange}
            value={password}
          />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>

        {/* ZipCode & Contact Info */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="zipcode" 
              id="zipcode" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required
              maxLength={5} 
              onChange={handleChange}
              value={zipcode}
            />
            <label htmlFor="zipcode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ZipCode (10001)</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="contact-info" 
              id="contact-info"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
              onChange={handleChange}
              value={contact_info}
            />
            <label htmlFor="contact-info" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Information</label>
          </div>
        </div>

        {/* Bio */}
        <div className="relative z-0 w-full mb-5 group">
          <input 
            type="text" 
            name="bio" 
            id="bio" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder="" 
            required 
            autoComplete="off"
            onChange={handleChange}
            value={bio}
          />
          <label htmlFor="bio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about yourself</label>
          </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up Now</button>
      </form>
      
      {!!errorText && <p className="text-red-500 mt-4">{errorText}</p>}
      <p className="mt-4">Already have an account with us? <Link to="/login" className="text-blue-600 hover:underline">Log in!</Link></p>
      </div>
      </div>
    </>
  );
}
