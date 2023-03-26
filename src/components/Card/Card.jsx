import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/ai/tools"
        );
        const data = await res.json();
        setData(data.data.tools);
        // console.log(data.data.tools);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="my-12 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((singleData) => (
        <SingleData key={singleData.id} singleData={singleData} />
      ))}
    </div>
  );
};

export default Card;
