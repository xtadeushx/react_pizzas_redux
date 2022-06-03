import debounce from 'lodash.debounce';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { Context } from '../../context';
import styles from './Search.module.scss';

const languageSearch = {
  ru: 'поиск пицы...',
  ua: 'пошук пици...',
};

function Search() {
  // Redux
  const { isUkraine } = useSelector((state) => state.language);
  // State
  const { setInputValue } = useContext(Context);
  const [value, setValue] = useState('');
  // ref
  const input = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setInputValue(str);
    }, 2000),
    [],
  );

  const onChangeInput = () => {
    setValue(input.current.value);
    updateSearchValue(value);
  };


  const onClear = () => {
    setValue('');
    input.current.focus();
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.search}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder={isUkraine ? languageSearch.ua : languageSearch.ru}
        value={value}
        onChange={()=> onChangeInput()}
        ref={input}
      />

      {value && (
        <svg
          className={styles.close}
          onClick={onClear}
          enableBackground="new 0 0 32 32"
          height="32px"
          id="Слой_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
            fill="#121313"
            id="Close"
          />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      )}
    </div>
  );
}

export default Search;
