import React from 'react';
import PropTypes from 'prop-types';

// Styles can be customized as per your design requirements
const iconStyle = {
  marginRight: '10px',
};

const textStyle = {
  fontWeight: 'bold',
};

const subTextStyle = {
  fontSize: '0.8em',
  color: '#B0B0B0', // Light gray for subtext
};

const Badge = ({ icon, text, subText }) => {
  return (
    <div className='flex items-center rounded-ten p-3 my-3 bg-accent-2 text-white'>
      <div style={iconStyle}>{icon}</div>
      <div>
        <div style={textStyle}>{text}</div>
        <div style={subTextStyle}>{subText}</div>
      </div>
    </div>
  );
};

// PropTypes for type checking
Badge.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default Badge;