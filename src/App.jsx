import React, { Children, useState } from "react";
import Cards from "./Cards";




function App() {
  // const [foodItems, setFoodItems] = useState();
  // const [dropDownConut, setdropDownConut] = useState();
  const [searchItem, setSearchItem] = useState('')

  let data = [
    {
      nameThing: "Jasmin",
      imageThing:
        "https://images.pexels.com/photos/5649254/pexels-photo-5649254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "flower",
    },
    {
      nameThing: "Rose",
      imageThing:
        "https://images.pexels.com/photos/2008146/pexels-photo-2008146.jpeg?auto=compress&cs=tinysrgb&w=800",
     idThing: "flower",
    },
    {
      nameThing: "marygold",
      imageThing:
        "https://images.pexels.com/photos/1485645/pexels-photo-1485645.jpeg?auto=compress&cs=tinysrgb&w=800",
     idThing: "flower",
    },
    {
      nameThing: "Tulip",
      imageThing:
        "https://images.pexels.com/photos/54186/tulips-flowers-tulip-bouquet-violet-54186.jpeg?auto=compress&cs=tinysrgb&w=800",
     idThing: "flower",
    },
    {
      nameThing: "Apple",
      imageThing:
        "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=800",
     idThing: "fruit", 
    },
    {
      nameThing: "Grapes",
      imageThing:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "fruit", 
    },
    {
      nameThing: "Watermelon",
      imageThing:
        "https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "fruit", 
    },
    {
      nameThing: "strawberrry",
      imageThing:
        "https://images.pexels.com/photos/393768/pexels-photo-393768.jpeg?auto=compress&cs=tinysrgb&w=800",
     idThing: "fruit", 
    },
    {
      nameThing: "dove",
      imageThing:
        "https://images.pexels.com/photos/75973/pexels-photo-75973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "bird", 
    },
    {
      nameThing: "parrot",
      imageThing:
        "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "bird", 
    },
    {
      nameThing: "peacock",
      imageThing:
        "https://images.pexels.com/photos/257428/pexels-photo-257428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "bird", 
    },
    {
      nameThing: "Eagle",
      imageThing:
        "https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     idThing: "bird", 
    },
    
      
  ];

  // const handleOnClick = (event)=>{
  //   const searchItem=e.target.value
  //   console.log(searchItem)
  //   setSearch(searchItem)
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchItem(searchTerm)
  }

  

 let result =  data.filter((data)=>{
  if( data.nameThing ===searchItem){
    return true
  }else if(data.idThing===searchItem){
    return true

  }
    
  })
  

  // filter


  return (
    <>
      <div className="">
        {/* <select name="" id="" onClick={handleOnClick}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select> */}

        <input type="text" id="input" onChange={handleInputChange} />

      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px 30px 0px 30px",
        }}
      >
        {result.map(({ nameThing, imageThing, idThing}) => {
          return (
            <>
              <Cards para={idThing} title={nameThing} image={imageThing} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;