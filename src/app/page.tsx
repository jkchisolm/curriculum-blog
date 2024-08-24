import Image from "next/image";
import styles from "./page.module.css";
import { CardList } from "../components/cardlist/CardList";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.content}>
          <CardList />
        </div>
      </div>
    </main>
  );
}
