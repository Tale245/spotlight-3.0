import React from "react";
import onlineIco from "../images/onlineIco.svg";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import vk from "../images/vk.png";
import youtube from "../images/youtube.png";
import telegram from "../images/telegram.png";
const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__container_name">
        <div className="profile__online-type">
          <img className="profile__type-ico" src={onlineIco} />
          <p className="profile__type-name">online</p>
        </div>
        <p className="profile__name">Эмилия Кроссман</p>
      </div>

      <div className="profile__container_images">
        <img className="profile__image" src={img1} />
        <img className="profile__image" src={img2} />
        <img className="profile__image" src={img3} />
        <img className="profile__image" src={img4} />
      </div>

      <p className="profile__paragraph">
        <span className="profile__paragraph_span">Немного о себе:</span> Привет!
        Меня зовут Эмилия, я - фотограф! Надеюсь тебе понравятся мои работы! :)
        Если появились вопросы, обращайся в личные сообщения!
      </p>

      <div className="profile__social">
        <img className="profile__item" src={vk} />
        <img className="profile__item" src={youtube} />
        <img className="profile__item" src={telegram} />
      </div>
    </section>
  );
};

export default Profile;
