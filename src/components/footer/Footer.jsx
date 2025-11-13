import React from "react";
import logo from '../../assets/PawMart-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-300 py-3 md:py-7">
      <footer className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-2 md:px-5 pb-5 md:pb-9 border-b border-primary">
        <aside className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="logo"  className="w-35 md:w-50"/>
          <div>PawMart connects local pet owners and buyers for adoption and pet care products.</div>
        </aside>
        <nav className="flex flex-col md:gap-2 items-center">
          <h6 className="font-extrabold">Quick Links</h6>
          <Link to={'/'} className="link link-hover">Home</Link>
          <Link to={'/#'} className="link link-hover">Contact</Link>
          <Link to={'/#'} className="link link-hover">Terms & condition</Link>
          <Link to={'/#'} className="link link-hover"> Privacy Policy</Link>
        </nav>
        <nav className="flex-1 flex flex-col items-center md:items-end">
          <h6 className="font-extrabold">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <FaFacebook className="btn bg-secondary text-base-100 rounded-full px-0" size={'25'}/>
            <FaSquareInstagram className="btn bg-secondary text-base-100 rounded-full p-0" size={'25'}/>
            <FaSquareXTwitter className="btn bg-secondary text-base-100 rounded-full px-0" size={'25'}/>
          </div>
        </nav>
      </footer>
      <div className="flex-1 flex items-center justify-center text-sm pt-5 md:pt-9 text-gray-500">
        © 2025 PawMart. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
