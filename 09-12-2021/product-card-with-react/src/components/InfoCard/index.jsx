import React from 'react';

const Description = ({ title, content, section1, section2 }) => (
  <div className="text-block">
    <h3 className="text-block__title">{title}</h3>
        <p className="text-block__content">{content}</p>
    <h3 className="text-block__section1">{section1}</h3>
        <div className='color-button'>
            <button className='button__item black'></button>
            <button className='button__item blue'></button>
            <button className='button__item yellow'></button>
            <button className='button__item grey'></button>
        </div>
    <h3 className="text-block__section2">{section2}</h3>
        <div className='size-button'>
            <button className="button__item"> S </button>
            <button className="button__item"> M </button>
            <button className="button__item"> L </button>
        </div>
  </div>
)

export default Description