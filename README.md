# cally-repro

This repo demonstrates an error that occurs when the [Cally](https://github.com/WickyNilliams/cally) date picker is used in Storybook.

## Getting started

Check out this repo and run `npm i`.

## Viewing expected behavior

1. Run `npm run dev`. This command runs a React + Vite app.
2. Open the local dev site in a browser.
3. Open browser dev tools and open the console tab.
4. Click a date.
5. Note that no ßerrors appear in console.
6. Press an arrow key.
7. Note that the highlighted date moves in the direction of the arrow key that was pressed.

## Viewing error

1. Run `npm run storybok`. This command runs React + Vite + Storybook.
2. In a browser, open http://localhost:6006/iframe.html?globals=&id=example-datepicker--basic&viewMode=story
3. Open browser dev tools and open the console tab.
4. Click a date.
5. Note that the follwoing error appears in console: "VM1030 cally.js:19 Uncaught RangeError: Maximum call stack size exceeded".
6. Press an arrow key.
7. Note that the highlighted date does not move.

## More details on the error

The "maximum call stack size" error appears when Cally [attempts to focus](https://github.com/WickyNilliams/cally/blob/38e6a7bc7c53e29c427f5de028b8544e2bff9a9d/src/calendar-month/calendar-month.tsx#L23) to focus the button for currently selected date. This logic runs when the month is focused.

If focus events bubbled, then I could see why this error would occur. The button's focus event would bubble up to the month, which would trigger another button focus, which would trigger another month focus, which would trigger another button focus, etc.

My understanding is that [focus events don't bubble](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event), so I'm confused as to why this loop would occur. Is it possible that something in Storybook is causing focus events to bubble?
