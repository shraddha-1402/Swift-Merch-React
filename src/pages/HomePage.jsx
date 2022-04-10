import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, CategoryCard } from "../components";
import { useDynamicTitle } from "../hooks";

const HomePage = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useDynamicTitle();

  useEffect(() => {
    (async () => {
      try {
        const { data, status, statusText } = await axios.get("/api/categories");
        if (status === 200) setFeaturedCategories(data.categories);
        else throw new Error(`${statusText} ${status}`);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="my-3-5">
        <h1 className="center-text my-2">Featured Merch</h1>
        <div className="flex-row justify-center gap-2 flex-wrap">
          {featuredCategories.map((categoryDetails) => (
            <CategoryCard
              key={categoryDetails.id}
              categoryDetails={categoryDetails}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export { HomePage };
