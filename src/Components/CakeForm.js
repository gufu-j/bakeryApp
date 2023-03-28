import React, { useState } from "react";

function CakeForm({handleNewCake}){


    const [name, setName]= useState("")
    const [picture, setPicture]= useState("")
    const [description, setDescription]= useState("")

    function handleEventSubmit(e){
        e.preventDefault();
        const newCake = {
            name:name,
            img:picture,
            description: description,
            isOrdered: false  // isOredered it's supposed to be isOrdered, correct ASAP
        }
        if(newCake.name === ""){
            alert("You need to enter name, image adress and description of cake")
        }else{
        
            fetch("http://localhost:3000/breads",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCake), 
        })
        .then((response)=> response.json())
        .then((newItem)=> handleNewCake(newItem));
    }
    }
    
    return (
        <form className="NewItem" onSubmit={handleEventSubmit}>
        <button type="submit">Add Cake</button>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)} 
            placeholder="name..."     
            />
             <input
            type="text"
            name="picture" 
            value={picture}
            onChange={(e)=>setPicture(e.target.value)}
            placeholder="image address..."
            />
             <input
            type="text"
            name="description"
            value={description}      
            onChange={(e)=> setDescription(e.target.value)}
            placeholder="description..."
            />
      </form>
    )

}


export default CakeForm