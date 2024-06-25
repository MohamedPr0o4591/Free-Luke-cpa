import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../Redux/Actions/GetUserProfile";
import { Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SubTitle from "../Utilities/SubTitle";

const TransTable = () => {
  const [preventPayments, setPreventPayments] = useState([]);

  const getPayments = useSelector(
    (state) => state.USER_PROFILE.prevent_payments
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    setPreventPayments(getPayments);
  }, [getPayments]);

  const showPayments = preventPayments.map((card, index) => (
    <SwiperSlide key={index}>
      <div className="card-view d-flex w-auto flex-column">
        <span>Payment name : {card.paymentName}</span>

        <span>Phone / E-mail : {card.phone}</span>

        <span>Points : {card.countPoint}</span>

        <span>
          Status :{" "}
          {card.status === "accepted" ? (
            <span className="text-success"> Accepted</span>
          ) : (
            <span className="text-danger">Canceled</span>
          )}
        </span>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="trans_table">
      <SubTitle title={"Review payments"} />

      <Swiper spaceBetween={50} slidesPerView={1.5} className="p-3">
        {showPayments ? showPayments : <h3>You haven't previous payments</h3>}
      </Swiper>

      {/* <Row >
                <div className='card-view d-flex w-auto flex-column'>
                    <span >
                        Payment name : vodafone
                    </span>

                    <span >
                        Phone / E-mail : 010
                    </span>

                    <span >
                        Points : 1100
                    </span>

                    <span >
                        Status : accept
                    </span>
                </div>

                <div className='card-view d-flex w-auto flex-column'>
                    <span >
                        Payment name : vodafone
                    </span>

                    <span >
                        Phone / E-mail : 010
                    </span>

                    <span >
                        Points : 1100
                    </span>

                    <span >
                        Status : accept
                    </span>
                </div>
            </Row> */}
    </div>
  );
};

export default TransTable;
