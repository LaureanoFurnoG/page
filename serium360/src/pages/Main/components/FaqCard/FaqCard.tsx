import React, { useState } from 'react';
import './FaqCard.css';

type Props = {
  question: string;
  answer: string;
}

const FaqCard: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-card ${open ? 'faq-card--open' : ''}`} onClick={() => setOpen(!open)}>
      <div className='faq-card__header'>
        <div className='faq-card__icon'>?</div>
        <span className='faq-card__question'>{question}</span>
        <div className={`faq-card__arrow ${open ? 'faq-card__arrow--up' : ''}`}>&#8250;</div>
      </div>
      <div className='faq-card__divider' />
      <div className='faq-card__body'>
        <p className='faq-card__answer'>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;