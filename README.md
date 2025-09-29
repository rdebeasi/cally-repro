# cally-repro

To reproduce this issue:

1. Check out this repo
2. Run `npm i`
3. Run `npm run storybook`
4. In a browser, open http://localhost:6006/iframe.html?globals=&id=example-datepicker--basic&viewMode=story
5. Open browser dev tools and navigate to console
6. Click a date
7. Press an arrow key

**Expected behavior:** The selection moves in the direction of the arrow key.

**Actual behavior:** The selection does not move. In addition, an error appears in console. Pressing an arrow key causes the error to repeat.

> Uncaught RangeError: Maximum call stack size exceeded
>    at get current (cally.js?v=02ac67fb:19:14)