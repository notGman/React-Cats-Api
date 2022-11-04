import { useState,useEffect } from "react";
import styled from "styled-components";
import MainContents from "../MainContents/MainContents";

const color = "#D0383E";

const SEARCHBAR = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
const INPUT = styled.input`
  width: 50%;
  background-color: #444;
  border: none;
  padding: 10px;
  /* border: 2px solid yellowgreen; */
  font-size: 22px;
  border-radius: 10px 0 0 10px;
  font-family: "Poppins";
  color: ${color};
`;
const BUTTON = styled.button`
  width: 100px;
  background-color: ${color};
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 18px;
`;

const SearchBar = () => {
  const a ='https://api.thecatapi.com/v1/breeds?limit=67&'
  const [url,setUrl] = useState(a);
  // const [url,setUrl] = useState('https://api.thecatapi.com/v1/breeds/aege');
  const [searchInput, setSearchInput] = useState(null);
  const [showData, setShowData] = useState(true);
  const handleChange = (e) =>{
    e.preventDefault();
    setSearchInput(e.target.value);
    setUrl(`https://api.thecatapi.com/v1/breeds?limit=${searchInput}&`)
    if(e.target.value==''){
      setUrl(`https://api.thecatapi.com/v1/breeds?limit=67&`)
    }
  }
  // const update = () =>{
  //   setUrl(`https://api.thecatapi.com/v1/breeds?limit=${searchInput}&`)
  // }
  return (
    <div>
    <SEARCHBAR>
      <INPUT type="text" placeholder="Search here" onChange={handleChange} value={searchInput}/>
      <BUTTON>search</BUTTON>
    </SEARCHBAR>
    <MainContents link={url}/>
    {/* { showData && searchInput === '' && <MainContents link={url}/> } */}
    </div>
  );
};

export default SearchBar;
