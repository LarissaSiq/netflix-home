import React, { useEffect, useState } from "react";
import Tmdb from "./services/Tmdb";
import { MovieRow } from "./components/MovieRow/index";
import { FeaturedMovie } from "./components/FeaturedMovie/index";
import { Header } from "./components/Header/index";
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((item) => item.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let movieChoose = originals[0].items.results[random];
      let chooseInfo = await Tmdb.getMovieInfo(movieChoose.id, 'tv');
      setFeaturedData(chooseInfo);
    }
    loadAll()
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <p>copyright @2021 | feito por <a className="link" href="https://github.com/LarissaSiq"
          target="blank">
          Larissa Siqueira
        </a></p></footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
    </div>
  );
}
export default App;