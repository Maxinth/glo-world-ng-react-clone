import React from "react";

const Service = ({ icon, goTo, firstLink, info, finalLinkText }) => {
  return (
    <article className="services__ind">
      <span>{icon}</span>

      <header>
        <a href={goTo} title="Instant Top-Up">
          {firstLink}
        </a>
        <p>
          {info}.<a href={goTo}>{finalLinkText}</a>
        </p>
      </header>
    </article>
  );
};

export default Service;
