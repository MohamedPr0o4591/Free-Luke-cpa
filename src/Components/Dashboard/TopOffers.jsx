import React, { useEffect, useState } from "react";
import OfferCard from "../Cards/OfferCard";
import coinMaster from "../../Images/coin master.png";
import mafiaCity from "../../Images/mafia city.webp";
import SubTitle from "../Utilities/SubTitle";
import "./TopOffers.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getTopOffers } from "../../Redux/Actions/GetTopOffers";

const TopOffers = ({ title }) => {
  const [offer, setOffer] = useState([]);

  const dispatch = useDispatch();

  const offersData = useSelector((state) => state.OffersData.offers);

  useEffect(() => {
    dispatch(getTopOffers());
  }, []);

  useEffect(() => {
    setOffer(offersData);
  }, [offersData]);

  return (
    <div className="top-offers">
      <SubTitle title={title} />

      <div
        style={{
          marginTop: 1 + "rem",
        }}
        className="top-offers-mobile-screen"
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          style={{
            padding: 0.4 + "rem",
          }}
        >
          {offer &&
            offer.map((offers, index) => (
              <SwiperSlide
                key={index}
                className={`${offers.status !== "active" && "desactive"}`}
              >
                <OfferCard
                  img={offers.image.secure_url}
                  title={offers.title}
                  points={offers.point}
                  desc={offers.description}
                  url={offers.url}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopOffers;
