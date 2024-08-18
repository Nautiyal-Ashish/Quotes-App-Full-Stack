import React, { Fragment, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./NewQuote.module.css";

function NewQuote() {
  const usernameInpRef = useRef();
  const quoteInpRef = useRef();
  let navigate = useNavigate();

  const addQuoteHandler = async (e) => {
    e.preventDefault();
    let author = usernameInpRef.current.value;
    let text = quoteInpRef.current.value;
    try {
      let resp = await axios.post('http://localhost:8080/addQuotes', { author, text });
      navigate('/');
    } catch (e) {
      console.log("cannot post at this moment");
    }
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>New Quote Form</h1>
        <form onSubmit={addQuoteHandler} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor='author' className={styles.label}>Author:</label>
            <input
              type='text'
              id='author'
              ref={usernameInpRef}
              className={styles.input}
              placeholder='Add Author Name'
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='quote' className={styles.label}>Quote:</label>
            <textarea
              rows={4}
              cols={10}
              id='quote'
              ref={quoteInpRef}
              className={styles.textarea}
              placeholder='Add Author Quote'
              required
            ></textarea>
          </div>
          <button className={styles.button}>Add Quote</button>
        </form>
      </div>
    </Fragment>
  );
}

export default NewQuote;
