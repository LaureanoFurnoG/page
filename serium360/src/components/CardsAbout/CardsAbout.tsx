import React from 'react';
import "./CardsAbout.css";

type Props = {
  title: string;
  icon: string;
  text: string;
  timeAOS: number;
}

const CardsAbout: React.FC<Props> = ({ title, icon, text, timeAOS }) => {
  return (
    <div data-aos="fade-left" data-aos-duration={timeAOS} className="info-card">
      <div className="info-card__accent" />
      <div className="info-card__icon-wrapper">
        <img src={icon} alt={title} className="info-card__icon" />
      </div>
      <div className="info-card__content">
        <h2 className="info-card__title">{title}</h2>
        <p className="info-card__text">{text}</p>
      </div>
    </div>
  );
};

export default CardsAbout;