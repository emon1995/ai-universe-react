import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
    <>
      <div className="my-12 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData key={singleData.id} singleData={singleData} />
        ))}
      </div>
      <Modal />
      <small onClick={() => setShowAll(!showAll)}>
        <Button>{showAll ? "See Hide" : "See More"}</Button>
      </small>
    </>
  );
};

export default Card;
