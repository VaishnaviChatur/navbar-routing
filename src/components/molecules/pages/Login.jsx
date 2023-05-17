import React from 'react'
import styles from './Login.module.css'
export default function Login() {
  return (
    <div>  <h1  className={styles.about}>Login</h1>
    <section className={styles.sec}>
        <form>
        <div className={styles.box}>
      <label>
        <span className={styles.sp}>email</span>
        <input  type="email"
               className={styles.int}
                defaultValue="" 
                placeholder="@email"
                required />
      </label>
      {/* <br><br></br></br> */}
      <label>
        <span  className={styles.sp}>password</span>
        <input  type="password"
              className={styles.int}
                defaultValue=""
                required />
      </label>
      <button className={styles.btn}>submit</button>
      </div>   </form> 
    </section></div>
   
  )
}
