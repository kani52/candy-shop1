
import React from 'react';

function Footer() {


  const current = new Date();

  return (
    <div>
    <footer>
      <center className='footer'>&copy;{current.getFullYear()}</center>
    </footer>
    </div>
  );
}

export default Footer;
