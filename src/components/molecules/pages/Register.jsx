import React from 'react'
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div>
      <h1  className={styles.about}>Register</h1>
        <section className={styles.sec}>
            <form>
            <label>
            <span  className={styles.sp}>first name</span>
            <input  type="text"
                     className={styles.int}
                    defaultValue=""
                    placeholder="name"
                    required />
          </label>
          <label>
            <span  className={styles.sp}>last name</span>
            <input  type="text"
                     className={styles.int}
                    defaultValue=""
                    placeholder="name"
                    required />
          </label>
          <label>
            <span className={styles.sp}>email</span>
            <input  type="email"
                   className={styles.int}
                    defaultValue="" 
                    placeholder="@email"
                    required />
          </label>
          <label>
            <span  className={styles.sp}>password</span>
            <input  type="password"
                  className={styles.int}
                    defaultValue=""
                    required />
          </label>
          <button className={styles.btn}>submit</button>
            </form>
        </section>
    
    </div>
  )
}
