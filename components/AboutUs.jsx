import styles from "../styles/PizzaList.module.css";
// import PizzaCard from "./PizzaCard";

const AboutUs = ({ AboutUs }) => {
  return (
    <div id = "Aboutus" className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
      A slice a day keeps the gloominess away and our pizza has the perfect blend of toppings that work together to create a delicious end result and provides you with that little serotonin which you deserve.
      </p>
      
    </div>
  );
};

export default AboutUs;
