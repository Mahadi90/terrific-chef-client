import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Chef</a>
    <a className="link link-hover">Recipes</a>
    <a className="link link-hover">Recipes blog</a>
    <a className="link link-hover">Quality Product</a>
  </div> 
  <div>
    <span className="footer-title">Quick Links</span> 
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Recipes</a>
    <a className="link link-hover">Special Chef</a>
    <a className="link link-hover">About Us</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">You Tube</a>
    <a className="link link-hover">Instragram</a>
  </div>
</footer>
    );
};

export default Footer;