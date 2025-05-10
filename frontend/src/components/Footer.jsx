import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" #1f2937 w-full">
        <div className="max-w-7xl mx-auto py-16 px-4 grid gap-12 lg:grid-cols-3">
          {/* Brand and Socials */}
          <div>
            <h1 className="text-3xl font-bold text-white">MERN Auth</h1>
            <p className="mt-4 text-sm">
              A powerful authentication system with role-based access and
              real-time dashboard integrations.
            </p>
            <div className="flex gap-6 mt-6">
              <FaFacebookSquare size={24} className="hover:text-[#00df9a]" />
              <FaInstagram size={24} className="hover:text-[#00df9a]" />
              <FaTwitterSquare size={24} className="hover:text-[#00df9a]" />
              <FaGithubSquare size={24} className="hover:text-[#00df9a]" />
              <FaDribbbleSquare size={24} className="hover:text-[#00df9a]" />
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h6 className="font-semibold mb-2 text-white">Solutions</h6>
              <ul className="space-y-2 text-sm">
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 text-white">Support</h6>
              <ul className="space-y-2 text-sm">
                <li>Pricing</li>
                <li>Documentation</li>
                <li>Guides</li>
                <li>API Status</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 text-white">Company</h6>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 text-white">Legal</h6>
              <ul className="space-y-2 text-sm">
                <li>Claim</li>
                <li>Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className=" border-gray-800 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MERN Auth. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
