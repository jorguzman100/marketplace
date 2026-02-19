import React from "react";
import { Link } from "react-router-dom";

function Brand({ to, compact }) {
  return (
    <Link to={to || process.env.PUBLIC_URL + "/"} className={`market-brand ${compact ? "compact" : ""}`}>
      <span className="market-brand-mark">
        <i className="fas fa-shopping-bag"></i>
      </span>
      <span className="market-brand-copy">
        <span className="market-brand-title">THE MARKET</span>
        <span className="market-brand-subtitle">NEXT GEN COMMERCE</span>
      </span>
    </Link>
  );
}

export default Brand;
