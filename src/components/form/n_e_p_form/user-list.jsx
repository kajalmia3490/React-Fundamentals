// import React from "react";

// class User extends React.Component {
//     state = {
//         user: []
//     }

//     createUser = user => {
//         user.id = new Date().getTime().toString()
//         this.setState({
//             user: [...this.state.user, user]
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>
//                     All Registered Users
//                 </h3>
//                 <ul>
//                     {this.state.user.map(user => (<li key={user.id}>
//                         {user.name}
//                     </li>))}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default User