import { flushSync } from 'react-dom';

export const generateNumber = (max) => Math.floor(Math.random() * max - 0);

export const convertToVocab = (list) => list.split(/\n+/g).map((i) => ({
  word: i.split('=')[0].trim(),
  translation: i.split('=')[1].trim(),
  ...(i.split('=').length === 3 && { explanation: i.split('=')[2].trim() }),
  // subject: 'The Innocence of Father Brown',
  // subject: 'Tutoring',
  subject: 'Behave',
}));

/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export function shuffle(array) {
  let currentIndex = array.length; let
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const formatLocalStorageData = (data) => (data ? data.split(',') : []);

export const updateWithAnimation = (callback) => {
  document.startViewTransition(() => {
    flushSync(() => {
      callback();
    });
  });
};

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
