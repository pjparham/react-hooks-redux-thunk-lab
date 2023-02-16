import React, { useEffect } from "react"; // 3
import { useDispatch, useSelector } from "react-redux"; // 1 & 3
import CatList from "./CatList"
import { fetchCats } from "./catsSlice"; // 3

function Cats() {
  const catPics = useSelector((state) => state.entities) //2
  const dispatch = useDispatch(); // 4

  useEffect(() => {
    console.log(fetchCats())
    dispatch(fetchCats());
  }, []); //5

  console.log(catPics)
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics}/>
    </div>
  );
}

//1. import useSelector from "react-redux"
//2. use use selector to access our Redux store and set = to a variable
//3. import { useEffect } from 'react', { useDispatch } from 'react-redux', and { fetchCats } from './catsSlice'
//4. make dispatch available and set up useEffect with dispatch, fetchCats, and empty dependency array
//5.

export default Cats;
