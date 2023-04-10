/* eslint-disable no-magic-numbers */
const getDiffInDays = () => {
    const MILI_SECONDS = 1000;
    const SECONDS = 60;
    const MINUTES = 60;
    const HOURS = 24;

    const firstDate = Date.now();
    const secondDate = '02/24/2022';

    const x = new Date(firstDate);
    const y = new Date(secondDate);

    const resultDiff = Math.floor((x - y) / (MILI_SECONDS * SECONDS * MINUTES * HOURS));

    const i = resultDiff % 10;
    const j = resultDiff % 100;

    if (j >= 11 && j <= 19) return `${resultDiff} днів незламності!`;
    if (i === 1) return `${resultDiff} день незламності!`;
    if (i >= 2 && i <= 4) return `${resultDiff} дні незламності!`;
    return `${resultDiff} днів незламності!`;
};
const invincibility = document.querySelector('#invincibility');
invincibility.textContent = getDiffInDays();