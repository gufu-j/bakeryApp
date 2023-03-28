import React from 'react';

function Car({shopping, handleDelete}){

    

    let shoppingList = shopping.map(el=>{
        if(el.isOrdered === false ){

        return <li key={el.id}>{el.name}</li>
    }
    
    })

    console.log(shoppingList)


    return(
        
        <div>
        <h4>Your Shopping Car</h4>
        {shoppingList}
        </div>
    )
}

export default Car