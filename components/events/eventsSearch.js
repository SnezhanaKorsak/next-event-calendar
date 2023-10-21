import { useRef } from "react";
import { months } from "@/constants";

import Button from "@/components/ui/button";

import styles from "./eventsSearch.module.css";

export default function EventsSearch(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className={styles.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthRef}>
            {months.map(({ id, name })=> <option key={id} value={id}>{name}</option>)}
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
}