import React, { FunctionComponent, ChangeEvent } from "react";
import styles from "./index.module.scss";

type Props = {
  name: string;
  value: string;
  placeholder?: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: FunctionComponent<Props> = ({
  name,
  value,
  placeholder = "",
  changeHandler,
}) => {
  return (
    <div className={styles.search}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__icon}>
          <span className="x_search-1"></span>
        </div>

        <div className={styles.search__input}>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
