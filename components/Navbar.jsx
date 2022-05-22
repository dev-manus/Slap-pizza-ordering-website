import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
// import styles_ from "../styles/PizzaList.module.css";;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+91 9869457980</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="#Aboutus" passHref><a className={styles.listItem}>About Us</a></Link>
          <Link href="#PizzaList" passHref><a className={styles.listItem}>Menu</a></Link>
          {/* <Link href="#second-section"><a className={styles.listItem}>Menu</a></Link> */}
          {/* <li className={styles.listItem}>About Us</li> */}
          {/* <li className={styles.listItem}>Menu</li> */}
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <Link href="#SupplyChain" passHref><a className={styles.listItem}>Supply Chain</a></Link>
          {/* <li className={styles.listItem}>Reviews</li> */}
          {/* <li className={styles.listItem}>Contact Us</li> */}
          <Link href="#Footer" passHref><a className={styles.listItem}>Contact Us</a></Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
