import { flushSync } from 'react-dom';

export const generateNumber = (max) => Math.floor(Math.random() * max - 0);

export const convertToVocab = (list) => list.split(/\n+/g).map((i) => ({
  word: i.split('=')[0].trim(),
  translation: i.split('=')[1].trim(),
  ...(i.split('=').length === 3 && { explanation: i.split('=')[2].trim() }),
  // subject: 'Pluto',
  subject: 'The lord of the Rings',
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
