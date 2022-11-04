// import styled from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";
import Cards from './Cards';
import styled from "styled-components";
import BG from '../../CatLoad.jpg';
import Search from '../SearchBar/SearchBar';

const MAIN = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`
const LOADING = styled.div`
  text-align: center;
  margin: 10px 0 -85px 0;
  img{
    max-height: 300px;
  }
`

const MainContents = ({link}) =>{
  // const url = 'https://api.thecatapi.com/v1/breeds?limit=67&';
  const [page,setPage] = useState(null);
  useEffect(()=>{
    axios.get(link).then((response)=>{
      setPage(response.data);
    })
  },[])
  console.log(link);
  if(page === null){
    return (
    <LOADING>
      <img src={BG} alt="" />
    </LOADING>
  );
  }
  else{
  return(
    <MAIN>
      {page.map((data) => {
        return <Cards key={data.id}{...data}/>
      })}
      {/* {()=>{
        if (page[67]!=null){
          page.map((data) => {
            return <Cards key={data.id}{...data}/>
          })
        } else{
          return <Cards key={link.id}{...link}/>
        }
      }} */}
    </MAIN>
  );}
}

export default MainContents;