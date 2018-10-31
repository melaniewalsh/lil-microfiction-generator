import React from 'react';
import './Footer.scss';


const Footer = ({footer}) => (
  <footer className="footer">    
This lil' microfiction generator was built with React and draws on  dariusk's <a href="https://github.com/dariusk/corpora">"corpora" repository</a> and the 1000 most frequently appearing menu items from <a href="http://menus.nypl.org/data">the New York Public Library's "What's on the menu?" project</a>. Every story concludes with either a quotation from a famous movie/book, from William Shakespeare, or from Oprah Winfrey. <a href="https://github.com/melaniewalsh/lil-microfiction-generator">The code for this  lil' microfiction generator can be found on GitHub here</a>. </footer>
);

export default Footer;
