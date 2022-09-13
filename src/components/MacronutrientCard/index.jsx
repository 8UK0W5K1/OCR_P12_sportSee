import React from 'react';

import './macronutrientCard.css';

/** MacronutrientCard creation with icons and its values
 * @component
 * @param {String} image - icons
//  * @param {Integer} data - value number
 * @param {String} unit - unit
 * @param {String} text - macronutrient text
 * @returns {JSX.Element} cards component
 */

const MacronutrientCard = ({ icon, data, unit, text }) => {
  return (
    <div className='macronutrientCard'>
      <img src={icon} alt='' className='macronutrientCard__icons' />
      <div className='macronutrientCard__values'>
        <h3 className='macronutrientCard_units'>
          {data}
          {unit}
        </h3>
        <p className='macronutrientCard__texts'>{text}</p>
      </div>
    </div>
  );
};

export default MacronutrientCard;
