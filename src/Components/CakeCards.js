import React from "react";



function CakeCards({cake, handleUpdatedCake}){
    // We gonna do our patch method here

    function handleClickOrder(){
        console.log(cake)

        fetch(`http://localhost:3000/breads/${cake.id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                isOrdered: !cake.isOrdered,
            }),
        })
        .then((response)=> response.json())
        .then((updatedItem)=> handleUpdatedCake(updatedItem))
    }


    return(
       <div className="cake">
            <img className="img"  src={cake.img}/>
            <h2>{cake.name}</h2>
            <h3>Description</h3>
            <p>{cake.description}</p>
            <button onClick={handleClickOrder}>
                {cake.isOrdered ? "Ordered": "Place Order" }
            </button>
        </div>
    )
}

export default CakeCards
