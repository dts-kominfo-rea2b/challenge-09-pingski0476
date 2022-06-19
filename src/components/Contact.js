// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div id="container">
      <aside>
        <img src={data.photo} alt="kucing" />
      </aside>
      <section>
        <h3>{data.name}</h3>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </section>
    </div>
  );
};

export default Contact;
