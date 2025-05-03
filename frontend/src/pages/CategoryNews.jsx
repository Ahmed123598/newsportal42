import React from "react";
import CategoryNewsCard from "../components/CategoryNewsCard";

function IndiaNews() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <CategoryNewsCard
              title={
                "Telangana: 12 injured as TGSTC, private bus collide on Srisailam highway"
              }
              description={
                "The accident took place when the private bus, in order to avoid hitting a tipper parked on the road carriageway, moved on the wrong side and hit the TGSRTC bus at high speed.The passengers in both the buses suffered injuries. The local police on receiving information rushed to the spot. The injured persons were shifted in 108 ambulance to local hospitals and Osmania General Hospital for treatment. Heavy traffic jam was reported on the Srisailam Highway after the accident."
              }
              img={"../assets/Bus.webp"}
            />
            <CategoryNewsCard
              title={"hello"}
              description={"loremsafndsaich sahjdcbasduihcnsajkdcbnsa wiudebh"}
            />
            <CategoryNewsCard
              title={"hello"}
              description={"loremsafndsaich sahjdcbasduihcnsajkdcbnsa wiudebh"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndiaNews;
