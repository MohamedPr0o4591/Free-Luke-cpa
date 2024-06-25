import React, { useEffect, useState } from "react";
import "./WithdrawPage.css";
import SubTitle from "../../Components/Utilities/SubTitle";
import WithdrawCard from "../../Components/Cards/WithdrawCard";
import infoIcon from "../../Images/infoIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllPaymentsWay } from "./../../Redux/Actions/GetPaymentsWay";

const WithdrawPage = () => {
  const [payment, setPayment] = useState([]);

  const paymentsWayData = useSelector((state) => state.PAYMENTSWAY.paymentsWay);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPaymentsWay());
  }, []);

  useEffect(() => {
    setPayment(paymentsWayData);
  }, [paymentsWayData]);

  return (
    <div className="withdrawPage margin_p">
      <SubTitle title={"CASHOUT"} />

      <div className="info d-flex gap-3 align-items-center my-3">
        <img src={infoIcon} className="my-4" />

        <span className="opacity-50">
          Use your earned points to withdraw Paypal ,Bitcoin ,VISA ,Amazon and
          much more! like Crypto withdrawals start from 1$
        </span>
      </div>

      <span className="opacity-25 text-uppercase fs-6">withdraw cash</span>

      <div className="withdraw-container d-flex flex-wrap gap-4 mb-4">
        {payment &&
          payment.map((card) => (
            <div className={`${card.status !== "active" && "desactive"}`}>
              <WithdrawCard
                img={card.image.secure_url}
                payName={card.paymentName}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WithdrawPage;
