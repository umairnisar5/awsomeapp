import React from 'react';
import ReactDom from 'react-dom';

const fname = "Umair"
const lname = "Nisar"


ReactDom.render(<>
    <h1>{`My name Is ${fname} ${lname}`} </h1>
    <p>My Lucky number is {3 + 2}</p>
    <h2>Net Flex Series </h2>
    <ul>
      <li>Ertugal Ghazi </li>
      <li>Usman  Ghazi </li>
      <li>Talhda  Ghazi </li>
      <li>Teri Meri Khani  </li>
      <li>Test  </li>


    </ul>

  </>,
  document.getElementById('root')
);
