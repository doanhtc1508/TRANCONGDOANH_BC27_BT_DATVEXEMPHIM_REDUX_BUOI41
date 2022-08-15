import React from "react";
import { useSelector } from "react-redux/es/exports";

const Seats = () => {
  const { selectTickets } = useSelector((state) => state.tickets);
  // console.log(selectTickets);
  return (
    <>
      {selectTickets.reduce((total, item) => {
        return total + Number(item.price);
      }, 0)}
    </>
  );
};

export default Seats;
