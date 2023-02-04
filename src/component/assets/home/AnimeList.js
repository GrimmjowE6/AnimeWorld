import "./AnimeList.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import animeData from "../../../animeJson.json";



const AnimeItem = (props) => {
  const [DataFromItem, setDataFromItem] = useState([]);

  useEffect(() => {
    setDataFromItem(props.aData);
  }, []);
  return (
    <>
      <Link className="anime m-2 px-2 pt-2 " to={`/AnimeWorld/anime/${DataFromItem.name}`} state={DataFromItem} >
        <img className='poster' src={DataFromItem.poster_link} alt={DataFromItem.name} />
        <p className="name ">{DataFromItem.name}</p>
      </Link>
    </>
  );
};




const AnimeList = () => {
  const [animesFromJson, setAnimesFromJson] = useState([]);

  useEffect(() => {
    setAnimesFromJson(animeData.anime);
  }, []);

  return (
    <>
      <div className="bg-dark p-3 " ><h4 className="text-white  text-center" >anime list</h4></div>
      <div className="anime-list d-flex justify-content-around flex-wrap ">
        {
          animesFromJson.map(item => <AnimeItem key={item.id} aData={item} />)
        }
      </div>
    </>
  );
};
export default AnimeList
