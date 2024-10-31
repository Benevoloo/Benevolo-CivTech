// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import CurrentUserContext from "../contexts/current-user-context";
// import { getUser } from "../adapters/user-adapter";
// import { logUserOut } from "../adapters/auth-adapter";
// import UpdateUsernameForm from "../components/UpdateUsernameForm";
// import AlexPfp from '../images/Alex_pfp.png';


// export default function UserPage() {
//   const navigate = useNavigate();
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//   const [userProfile, setUserProfile] = useState(null);
//   const [errorText, setErrorText] = useState(null);
//   const { id } = useParams();
//   const isCurrentUserProfile = currentUser && currentUser.id === Number(id);


//   useEffect(() => {
//     const loadUser = async () => {
//       const [user, error] = await getUser(id);
//       if (error) return setErrorText(error.message);
//       setUserProfile(user);
//     };

//     loadUser();
//   }, [id]);

//   const handleLogout = async () => {
//     logUserOut();
//     setCurrentUser(null);
//     navigate('/');
//   };

//   const handleGoBacktoPage = () => {
//     navigate('/users/:id/neighor')
//   }
  
//   if (!userProfile && !errorText) return null;
//   if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  // const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

//   return <>
//     <h1>{profileUsername}</h1>
//     {!!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
//     <p>If the user had any data, here it would be</p>
//     <img src="AlexPf" alt="" />
//     <p>Fake Bio or something</p>
//     {
//       !!isCurrentUserProfile
//       && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
//     }
//   </>;
// }
// return (
//   <div className="bg-[#a97842] p-5 rounded-lg flex flex-col items-center w-72 mx-auto">
//     <h2 className="text-xl mb-4">{profileUsername}</h2>
//     <div className="text-2xl font-semibold mb-2">
//       <img src={AlexPfp} className="w-24 h-24 rounded-full bg-[#e1d4f9] flex items-center justify-center" />
//     </div>
//     <h3 className="text-lg font-medium text-gray-700">{userProfile.name || "Name"}</h3>
//     <div className="bg-[#b3d7ff] p-4 rounded-md mb-6 text-center">
//       <p>{userProfile.bio}</p>
//     </div>
//     <div className="flex justify-between w-full">
//       <button className="bg-yellow-300 py-2 px-4 rounded-md mr-2" onClick={handleGoBacktoPage}>Go Back</button>
//       {isCurrentUserProfile ? (
//         <button className="bg-green-700 text-white py-2 px-4 rounded-md" onClick={handleLogout}>Log Out</button>
//       ) : (
//         <button className="bg-green-700 text-white py-2 px-4 rounded-md">Accept Helper</button>
//       )}
//     </div>
//     {
//       !!isCurrentUserProfile
//       && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
//     }
//   </div>
// );
// }




import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import AlexPfp from '../images/Alex_pfp.png';
import { updateTask } from "../adapters/task-adapter";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);
  const { id, task_id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const handleGoBacktoPage = () => {
    navigate(`/users/${currentUser.id}/neighbor`);
  };

  const handleAccept = async (e) => {
    e.preventDefault()
    await updateTask(profileId, "In-progress", task_id)
    setIsAccepted(true)

    // navigate(`/users/${currentUser.id}/neighbor`)
  }

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;
  const profileId = isCurrentUserProfile ? currentUser.id : userProfile.id

  return (
    <div className="bg-[#d4a77b] p-6 rounded-lg flex flex-col items-center w-80 mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{profileUsername}</h2>
      <div className="mb-4">
        <img src={AlexPfp} alt="User Profile" className="w-24 h-24 rounded-full bg-[#e1d4f9] flex items-center justify-center" />
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-4">{userProfile.name || "User's Name"}</h3>
      <div className="bg-[#b3d7ff] p-4 rounded-md mb-6 text-center">
        <p>{userProfile.bio} </p>
      </div>
      <div className="flex justify-between w-full">
        <button className="bg-yellow-300 py-2 px-4 rounded-md mr-2" onClick={handleGoBacktoPage}>Go Back</button>
        {isCurrentUserProfile ? (
          <button className="bg-green-700 text-white py-2 px-4 rounded-md" onClick={handleLogout}>Log Out</button>
        ) : (
          <button 
            className={`py-2 px-4 rounded-md ${isAccepted ? 'bg-green-500 text-white' : 'bg-green-700 text-white'}`} 
            onClick={handleAccept}
          >
            {isAccepted ? '✔' : 'Accept Helper'}
          </button>
        )}
      </div>
      {
        !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      }
    </div>
  );
}