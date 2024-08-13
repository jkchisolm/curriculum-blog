import styles from "./homepage.module.css";
import CardList from "@/components/cardList/CardList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <CardList page={page} />
      </div>
    </div>
  );
}
