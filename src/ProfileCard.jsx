// function ProfileCard(props){
//     return (
//         <div>
//             <h3>{props.name}</h3>
//             <p>From {props.city}</p>
//             <p>Living In {props.location}</p>
//         </div>
//     )
// }
// export default ProfileCard


//or

function ProfileCard({name,city,location,address,hobbies,age,isStudent}){
    return (
        <div>
            <h3>{name}</h3>
            <p>From {city}</p>
            <p>Living In {location}</p>
            <p>Current Address {address.city}</p>
            <p>Hobbies: {hobbies}</p>
            <p>age: {age}</p>
            <p>isStudent : {isStudent?"YES":"NO"}</p>
        </div> 
    )
}
export default ProfileCard