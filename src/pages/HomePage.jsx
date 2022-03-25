import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, CategoryCard } from "../components";

const HomePage = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(async () => {
    const response = await axios.get("/api/categories");
    if (response.status === 200)
      setFeaturedCategories(response.data.categories);
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
