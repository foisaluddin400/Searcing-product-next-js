"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Search = () => {
  const [query, setQuery] = useState(""); // সার্চ বক্সের ভ্যালু স্টোর করতে
  const [meals, setMeals] = useState([]); // খাবারের তথ্য স্টোর করতে
  // সার্চ করার ফাংশন
  useEffect(() => {
    const fetchInitialMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const data = await res.json();
      setMeals(data.meals || []); // ডেটা স্টেট এ সেট করা
    };

    fetchInitialMeals(); // ফাংশন কল
  }, []);
  const searchMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };
  return (
    <div className="w-[80%] m-auto">
      <div className="flex justify-center my-5">
        <input className="p-2"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Your Item...."
        />
        <button className="bg-green-900 text-white px-3" onClick={searchMeals}>Search</button>
      </div>
      <div>
        {meals && meals.length > 0 ? (
          <div className="grid grid-cols-4">
            {meals.map((meal) => (
              <div className="m-2 ">
                <Image src={meal.strMealThumb} width={300} height={100} className="w-full h-auto"></Image>
                <div className="bg-white p-2">
                  <h1>{meal.strMeal}</h1>
                  <h1>{meal.strCategory}</h1>
                  <Link href={`/Search/${meal.idMeal}`}><button className=" bg-orange-950 p-1 text-white">
                    Details..
                  </button></Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>no meals found </p>
        )}
      </div>
      <div>
        
      </div>
    </div>
  );
};
export default Search;
