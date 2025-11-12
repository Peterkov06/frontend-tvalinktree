import React, { useContext, useEffect, useState } from "react";
import { SlugContext } from "../context/SlugContextProvider";
import UserCard from "../components/UserCard";
import { getUserData } from "../services/protectedAPI";
import NewURL from "../components/NewURL";

const Home = () => {
  const { slugs } = useContext(SlugContext);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="col">
      <h1>Linktree</h1>
      <NewURL></NewURL>
      {slugs.map((x) => (
        <UserCard {...x}></UserCard>
      ))}
    </div>
  );
};

export default Home;
