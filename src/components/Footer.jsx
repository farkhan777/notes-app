import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Farkhan Hamzah Firdaus.</p>
    </footer>
  );
}

export default Footer;
