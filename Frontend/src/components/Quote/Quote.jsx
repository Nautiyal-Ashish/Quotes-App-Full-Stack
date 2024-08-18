import React, { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Quote.module.css';

function Quote(props) {
  let navigate = useNavigate();

  const showQuoteHandler = (id) => {
    navigate(`/quotes/${id}`);
  };

  return (
    <Fragment>
      <li className={styles.quote}>
        <div className={styles.quoteContent}>
          <p className={styles.quoteText}>"{props.text}"</p>
          <h3 className={styles.quoteAuthor}>— {props.author}</h3>
        </div>
        <button className={styles.quoteButton} onClick={() => showQuoteHandler(props.id)}>
          View Full Quote
        </button>
      </li>
    </Fragment>
  );
}

export default Quote;
