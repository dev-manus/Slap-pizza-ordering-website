import styles from "../styles/SupplyChain.module.css";
import Image from "next/image";

const SupplyChain = () => {
    return (
        <div className={styles.container} >
                <div className={styles.card}> 
                    <h1 className={styles.motto}>
                        QR Code for our supply chain here.
                    </h1>
                </div>
            
            <div className={styles.item}>
                <Image src="/img/QRcode.jpeg" alt="" width="200" height="200" />
            </div>
        </div>
    );
};

export default SupplyChain;