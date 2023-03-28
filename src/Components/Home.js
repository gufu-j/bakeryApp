import React from "react";

function Home(){

    const myStyle={
        backgroundImage: 
 "url('https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/325339190_890891788941004_3217037369150923333_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=SLoAmPwqKJgAX8W5FqM&_nc_ht=scontent-lga3-2.xx&oh=00_AfDd4tq09ovbc_smbkQTzgz0w1pUJSf8Eh-vTt4-zM_sfw&oe=642504DD')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "white"
    };

    return (
        <div style={myStyle}>
        <h1 className="title"> Panaderia Santa Teresita </h1>
      </div>
        )

}

export default Home;
