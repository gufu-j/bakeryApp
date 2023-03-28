import React from 'react';

function Car({shopping, handleDelete}){

    console.log(shopping)
    let shoppingList = shopping.map(el=>{
        if(el.isOrdered === false ){

        return <li key={el.id}>{el.name}</li>
    }
    
    })

    console.log(shoppingList)


    return(
        <div>
        <h4>Shopping Car</h4>
        {shoppingList}
        </div>
    )
}

export default Car