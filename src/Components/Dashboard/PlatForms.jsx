import React, { useEffect, useState } from "react";
import SubTitle from "../Utilities/SubTitle";
import PlatformCard from "../Cards/PlatformCard";
import { useDispatch, useSelector } from "react-redux";
import { GetOffersWall } from "../../Redux/Actions/GetOffersWall";

const PlatForms = ({ title }) => {
  const [offers, setOffers] = useState([]);

  const dispatch = useDispatch();

  const offersWallData = useSelector(
    (state) => state.offersPlatforms.offersWall
  );

  useEffect(() => {
    dispatch(GetOffersWall());
  }, []);

  useEffect(() => {
    setOffers(offersWallData);
  }, [offersWallData]);

  return (
    <div>
      <SubTitle title={title} />

      <div
        style={{
          display: "flex",
          gap: 0.4 + "rem",
          flexWrap: "wrap",
        }}
      >
        {offers &&
          offers.map((wall, index) => (
            <div
              key={index}
              className={` ${wall.status !== "active" && "desactive"}`}
            >
              <PlatformCard
                img={wall.image.secure_url}
                title={wall.title}
                url={`${wall.url}${wall._id}`}
              />

              {wall.status !== "active" && (
                <div className="desactive-inner">Not available now</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlatForms;
