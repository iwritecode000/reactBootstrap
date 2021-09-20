import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-12 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top img-fluid" alt={props.imgsrc} />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              {props.title}
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
