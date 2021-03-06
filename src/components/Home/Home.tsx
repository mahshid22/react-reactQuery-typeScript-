import React from "react";
import useCharacters from "../../hooks/characters";
import Card from "../Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const { data: characters } = useCharacters();

  return (
    <div className={styles.Home}>
      {characters &&
        characters.results.map((chr, index) => {
          return <Card key={chr.id + chr.created} character={chr} />;
        })}
    </div>
  );
};

export default Home;
