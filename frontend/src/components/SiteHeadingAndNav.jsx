// import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import CurrentUserContext from "../contexts/current-user-context";

// export default function SiteHeadingAndNav() {
//   const { currentUser } = useContext(CurrentUserContext);

//   return <header>
//     <a className="benevoloIconNav" id='logo' href='/'>Benevolo</a>
//     <nav>
//       <ul>
//         <li><NavLink to='/'>Home</NavLink></li>

//         {
//           currentUser
//             ? <>
//               <li><NavLink to='/users' end={true}>Users</NavLink></li>
//               <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
//             </>
//             : <>
//               <li><NavLink to='/login'>Log In</NavLink></li>
//               <li><NavLink to='/sign-up-header'>Sign Up</NavLink></li>
//             </>
//         }
//       </ul>
//     </nav>
//   </header>;
// }


import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a className="benevoloIconNav" id='logo' href='/'>Benevolo</a>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>

        {
          currentUser
            ? <>
              {/* <li><NavLink to='/users' end={true}>Users</NavLink></li> */}
              {
                currentUser.is_neighbor 
                  ? <>
                      <li><NavLink to={`/users/${currentUser.id}/neighbor`}>Post Tasks</NavLink></li>
                    </> 
                  : <>
                      <li><NavLink to={`/users/${currentUser.id}/helper`}>View Tasks</NavLink></li>
                    </>
              }
              <li><NavLink to={`/profile/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            </>
            : <>
              <li><NavLink to='/login'>Log In</NavLink></li>
              <li><NavLink to='/sign-up-header'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}