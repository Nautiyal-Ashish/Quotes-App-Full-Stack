import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import styles from "./ShowQuote.module.css";

function ShowQuote() {
  const [quote, setQuote] = useState({ author: "", text: "" });
  const params = useParams();

  // Fetch quote by ID
  async function fetchQuotes() {
    try {
      let resp = await axios.get(`http://localhost:8080/quotes/${params.id}`);
      let { text, author } = resp.data;
      setQuote({ text, author });
    } catch (error) {
      console.error("Failed to fetch the quote:", error);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, [params.id]);

  return (
    <div className={styles.container}>
      <div className={styles.quoteCard}>
        <h1 className={styles.quoteText}>"{quote.text}"</h1>
        <h2 className={styles.author}>- {quote.author}</h2>
      </div>
    </div>
  );
}

export default ShowQuote;
