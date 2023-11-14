export const generateNumber = (max) => Math.floor(Math.random() * max - 0);

export const convertToVocab = (list) => list.map((i) => ({ word: i.split('=')[0].trim(), translation: i.split('=')[1].trim() }));

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
