import React from "react";
import img1 from "../images/card__image1.png";
import img2 from "../images/card__image2.png";
const Main = () => {
  return (
    <section className="main">
      <h2 className="main__title">Мои работы</h2>
      <div className="main__container_photo">
        <div className="main__container_button">
          <button className="main__button main__btn_add"></button>
          <div className="main__container_type-menu">
            <button className="main__button main__btn_grid"></button>
            <button className="main__button main__btn_list"></button>
          </div>
        </div>
        <div className="main__container_images">
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img1} />
          </div>
          <div className="main__element">
            <img className="main__image" src={img2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
