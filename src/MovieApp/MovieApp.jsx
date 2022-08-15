import React from "react";
import BookedTickets from "./BookedTickets";
import TicketsList from "./TicketsList";

const MovieApp = () => {
  return (
    <div className="container mt-2 text-white">
      <div className="row">
        <div className="col-8">
          <h1 className="text-center text-secondary">Đặt vé xem phim</h1>
          <div className="title">
            <h3 className="text-center mt-3 ">Màn hình</h3>
            <p className="display"></p>
          </div>
          <div>
            <TicketsList />
          </div>
        </div>
        <div className="col-3 ms-5">
          <BookedTickets />
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
