import React from 'react';

const Footer = () => {

  const newDate = new Date().getFullYear();

  return (
  <>
    <footer id='footer'>
      <div className='container'>
            Logicrays

            <p>
             &copy; Copyright by {newDate}
            </p>
            <p>
              Built by | &nbsp; Hitesh Patel
            </p>
      </div>
    </footer>
  </>
  );
}

export default Footer;
