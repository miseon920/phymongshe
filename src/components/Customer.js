import React from "react";
import "../css/Customer.scss";

function Customer({ company }) {
  return (
    <div className="box customer">
      <div>
        <h3>CS CENTER</h3>
        <div className="tel">
          <a href={`tel:${company.tel}`}>{company.tel}</a>
        </div>
        <ul className="open">
          {company.open.map((it, idx) => {
            return <li key={idx}>{it}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>BANK INFO</h3>
        <p>{company.bank}</p>
        <p>예금주 : {company.company}</p>
      </div>
      <div>
        <h3>COMMUNITY</h3>
        <strong>{company.address}</strong>
        <ul className="sns">
          {company.sns.map((sns, idx) => {
            return (
              <li key={idx}>
                <a href={sns.link} tartget="_blank">
                  <i className={`xi-${sns.name}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Customer;
