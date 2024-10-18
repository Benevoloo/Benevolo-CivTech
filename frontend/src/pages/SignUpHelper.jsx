import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import Apps from "./IdUpload";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpHelper() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  // user personal info -- name and location 
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  //email or number for contacting 
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  //bio
  const [bio, setBio] = useState('');

  //kind of user (is neigbor? is helper?)

  const [userTypeIsNeighbor] = useState(false)



  // users shouldn't be able to see the sign up page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    //preventing it from refreshing
    event.preventDefault();
    setErrorText('');

    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ name, username, password, zipcode, email, phoneNumber, bio, userTypeIsNeighbor });
    if (error) return setErrorText(error.message);

    console.log(errorText)

    //setting the current user's information values to create their account and navigate them to their homepage
    setCurrentUser(user);
    //set the values of the inputs back to empty


    navigate('/neighbor');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'zipcode') setZipcode(value);
    if (name === 'email') setEmail(value);
    if (name === 'phoneNumber') setPhoneNumber(value);
    if (name === 'bio') setBio(value);

  };

  return <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
      <h2 id="baseHeading">Thank you for Volunteering!</h2>
      <p className="signUpBlurb">Your decision to participate in this community means a lot {":]"} </p>

      {/* name element
      <label htmlFor="name" placeholder="Insert name">Name</label>
      <input
        autoComplete="off"
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
      /> */}
      {/* name input element */}
      <label htmlFor="name">Name</label>
      <input
        autoComplete="on"
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={name}
      />

      {/* username element */}
      <label htmlFor="username">Username</label>
      <input
        autoComplete="on"
        type="text"
        id="username"
        name="username"
        placeholder="Your username"
        onChange={handleChange}
        value={username}
      />

      {/* Password element */}
      <label htmlFor="password">Password</label>
      <input
        autoComplete="on"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

      {/* Zipcode element */}
      <label htmlFor="zipcode">Zipcode</label>
      <input
        autoComplete="off"
        type="integer"
        id="zipcode"
        name="zipcode"
        onChange={handleChange}
        value={zipcode}
        maxLength="5"
      />

      <label htmlFor="setting-email">Email</label>
      <input
        autoComplete="on"
        type="text"
        id="setting-email"
        name="email"
        onChange={handleChange}
        value={email}
      />

      <label htmlFor="setting-phone-number">Phone Number</label>
      <input
        autoComplete="on"
        type="text"
        id="setting-phone-number"
        name="phoneNumber"
        onChange={handleChange}
        value={phoneNumber}
      />

      <label htmlFor="creating-bio">Tell Us About Yourself</label>
      <input
        autoComplete="off"
        type="text"
        id="creating-bio"
        name="bio"
        // if user type is equal to helper
        // placeholder = "what do you like? dislike? what are some skills you have that could be helpful? "
        // if user type is equal to neighbor vvv
        placeholder="What do you like? Dislike?"
        onChange={handleChange}
        value={bio}
      />

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button>Sign Up Now!</button> <Link to='/neighbor'></Link>
    </form>
    {!!errorText && <p>{errorText}</p>}
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>

  </>;
}
