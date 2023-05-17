import styles from "./HomeStyles.module.css";

function Home() {
  
    return(
        <div className={styles.home}>
            
            <div className={styles.right}>
                <img
                className={styles.img}
                 src='./resturant.jpg'/>
            </div>
            <div className={styles.left}>
                <p>Welcome to dream Food Leaf, Eat helthy be Strong.............</p>
                <button className={styles.btn}>Explore...</button>
            </div>
        </div>

  );
}

export default Home;
