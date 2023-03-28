import React from "react";
import CakeCards from "./CakeCards"


function CakeList({filteredCakes, handleUpdatedCake}){
    let displayCakes = filteredCakes.map((cake)=>{
        return(
            <CakeCards cake={cake} key={cake.id} handleUpdatedCake={handleUpdatedCake}/>
         )
        }
    )

    return(
            <center>
                <div className="content">
                    <ol>
                    {displayCakes}
                    </ol> 
                </div>
            </center>
    )
}

export default CakeList