import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Seats from "./Seats";

const BookedTickets = () => {
  const dispatch = useDispatch();
  const { selectTickets } = useSelector((state) => state.tickets);

  const handleDelete = (item) => {
    dispatch({ type: "delete", item });
  };

  return (
    <div className="mt-5 text-white">
      <h3 className="title-list">Danh sách ghế đã chọn</h3>
      <div className="mt-3">
        <div className="d-flex justify-content">
          <button className="btn btn-success me-2"></button>
          <p>Ghế đã đặt</p>
        </div>
        <div className="d-flex justify-content mt-2">
          <button className="btn btn-danger me-2"></button>
          <p>Ghế đang chọn</p>
        </div>
        <div className="d-flex justify-content mt-2 mb-2">
          <button className="btn btn-secondary me-2 "></button>
          <p>Ghế chưa đặt</p>
        </div>
      </div>
      <div>
        <table className="table table-bordered text-white">
          <thead>
            <tr>
              <th> Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            <>
              {selectTickets.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.name)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </>
            <tr>
              <td>Tổng tiền</td>
              <td>
                <Seats />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedTickets;
