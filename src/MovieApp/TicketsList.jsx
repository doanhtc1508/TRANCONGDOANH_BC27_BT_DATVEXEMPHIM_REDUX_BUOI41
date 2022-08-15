import React from "react";

import { useSelector, useDispatch } from "react-redux/es/exports";

const TicketsList = () => {
  const dispatch = useDispatch();
  const { tickets: ticketsList } = useSelector((state) => state.tickets);

  // hàm chọn ghế
  const handleSelect = (seatsTk, ticketName) => {
    dispatch({ type: "selectTicket", payload: { seatsTk, ticketName } });
  };

  return (
    <div>
      <div className="row-seats-top mb-4 ms-3">
        {ticketsList[0].seats.map((_item, index) => (
          <div
            className="ms-2"
            key={index}
            style={{ textAlign: "center", width: 45, height: 20 }}
          >
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
      {ticketsList.map((item, index) => (
        <>
          <div className="row-seats mb-3 " key={item + index}>
            <div>{item.row}</div>
            <div className="col-seats ms-4">
              {item.seats.map((ticket, index) => (
                <div key={index}>
                  <button
                    style={{
                      background:
                        !ticket.hasOwnProperty("isSelected") ||
                        ticket["isSelected"] === false
                          ? "#6c757d"
                          : "#dc3545",
                    }}
                    className="btn btn-secondary"
                    onClick={() => handleSelect(ticket, item.row)}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TicketsList;
