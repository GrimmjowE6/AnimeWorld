import React from 'react'
import "./AnimeInfo.css"
import { useLocation } from 'react-router-dom';

const AnimeInfo = (props) => {

    const location = useLocation();
    const animeDataFromItem = location.state ;
    return (
            <section className='h-100 d-flex align-items-center justify-content-center'  style={{backgroundImage: `url(${animeDataFromItem.bg_link})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div  className=" d-flex  w-75 p-4  text-white poster-container ">
                    <img className="poster-info" src={animeDataFromItem.poster_link} alt="poster"></img>
                    <div className=" mx-5 mr-auto ">
                        <div className="title mb-5 h3" >{animeDataFromItem.name}</div>
                        <div className="info mb-2" >EPISODE  :  {animeDataFromItem.episodes}</div>
                        <div className="info mb-2" >STUDIO   :  {animeDataFromItem.studio}</div>
                        <div className="info mb-2" >GENRE    :  {animeDataFromItem.genre}</div>
                        <div className="info mb-2" >WRITER   :  {animeDataFromItem.writer}</div>
                        <div className="info mb-2" >STORY    :  {animeDataFromItem.story_resume}</div>
                    </div>
                </div>
            </section>
            )
}

export default AnimeInfo
