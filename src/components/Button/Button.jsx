import React from 'react';
// npm install classnames

import classNames from 'classnames';

const Button = (props) => {
  const buttonClasses = classNames(
    'inline-block',
    'px-4',
    'py-2',
    'my-5',
    'font-bold',
    'rounded-full',

    props.className // Merge additional classes passed as a prop
  );

  return (
    <>
      <div className="mean-button">
        <button className={buttonClasses}>{props.value}</button>
      </div>
    </>
  );
};

export default Button;
