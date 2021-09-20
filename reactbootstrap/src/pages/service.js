import react from "react";
import Card from "../components/card";
import cardData from "../api/cardData";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10  mx-auto">
              <div className="row gy-4">
                {cardData.map((value, index) => {
                  return <Card imgsrc={value.imgsrc} title={value.title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
