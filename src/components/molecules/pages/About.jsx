import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <h2 className={styles.about}>This is about page</h2>
      <section className={styles.sec}>
        {/* <div className={styles.set}> */}
        <p className={styles.para}>
          Since our modest beginnings in 2005 with a little space in Toronto’s
          stylish Yorkville locale, ‘Organization Name’ ‘s development has been
          enlivened with the energy to cook and serve solid, Indian-roused
          takeout food. <br></br>In contrast to other Indian eateries, ‘Organization
          Name’ was made with the explicit expectation to appear as something
          else. <br></br>We realize numerous individuals love Indian sustenance, yet a
          large number of them loathe or are unconscious of the regularly
          unfortunate fixings that make run-of-the-mill Indian nourishment taste
          so great.
        </p>
        {/* </div> */}
      </section>
    </>
  );
}
export default About;
