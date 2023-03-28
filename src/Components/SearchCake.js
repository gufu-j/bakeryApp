import React from "react";



function SearchCake({setSearchCake}){


    return(
        <div onChange={(e)=>setSearchCake(e.target.value)}>
        <label> Search For Cakes🍰🥧🍮:  </label>
        <input type="text" placeholder="Type in Here "/>
        </div>
    )
}

export default SearchCake




