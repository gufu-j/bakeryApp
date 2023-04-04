import React from 'react';

function Cart({shopping}){

 
    const myStyle={
        backgroundImage: 
        "url('https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/322412816_872757373965464_5501469181507216635_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_ohc=9GT9sGDNJvYAX8K5im9&_nc_ht=scontent-lga3-2.xx&oh=00_AfCfHYP5ywiDf7av9jJaXP8y2Udlyb38Up_6eT-VL6gvWw&oe=642C1B89')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "white"
    };


    let shoppingList = shopping.map(el=>{
        return (
        <div key={el.id} className='rectangle'>
        <ul className='list'>{el.name}</ul>
        </div>

        )
    })

   // console.log(shoppingList)


    return(
        <center>
        <div style={myStyle}>
        <h4> List of cakes you have ordered </h4>
        {shoppingList}
        </div>
        </center>
    )
}

export default Car
