import { useEffect, useState } from 'react';
import CakeList from './CakeList'
import SearchCake from './SearchCake';
import Header from './Header';
import CakeForm from './CakeForm';


function BakeryPage({handleCakeInCart}){

    // Governing State for cake    
    const [cake, setCake] = useState([])

    // Use effect
    useEffect(() => {
      fetch("http://localhost:3000/breads")
        .then((r) => r.json())
        .then((items) => setCake(items));
    }, []);

    // POST a new cake 
    function handleNewCake(newCake){
        setCake([...cake, newCake])

    }

    const [searchCake, setSearchCake] = useState("")

    // Filter Section
    let filteredCakes = cake.filter((el) =>{
        return(
        el.name.toLowerCase().includes(searchCake.toLowerCase())
            )
        })

    //Last Section of This Project PATCH
    function handleUpdatedCake(cakeUpdated){
        const cakesInShopCart = cake.map((el)=> {
            if(el.id === cakeUpdated.id) {
                return cakeUpdated
            }else{
                return el
            }
        })
        setCake(cakesInShopCart)
        handleCakeInCart(cakeUpdated)
    }


 return(
        <div>
        <Header/>
        <SearchCake setSearchCake={setSearchCake}/>
        <CakeForm handleNewCake={handleNewCake}/>
        <CakeList filteredCakes= {filteredCakes} handleUpdatedCake={handleUpdatedCake} />
        </div>
    )
}

export default BakeryPage


