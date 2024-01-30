import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/rrohtashssingh"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Rohtash Singh.</span>
      </Link>
    </footer>
  );
}

export default Footer;
