# jQuery Counter

Welcome to the jQuery Counter repository on Github.

Options:
- textNext (default: +) Defines the text for the "increase" button
- textPrev (default: -) Defines the text for the "decrease" button
- colorNext (default: #49D260) Defines the color for the "next" button
- colorPrev (default: #FF9C85) Defines the color for the "previous" button
- fontColor (default: white) Defines the font color for both buttons
- minVal (default: 0) Minimum value for the input
- maxVal (default: 100) Maximum value for the input
- value (default: 0) Input value
- step (default: 1) Increment (and decrement) step
- disableCss (default: false) Disable js color and font insertion if needed

How to use:
```javascript
jQuery(".counter1").br_counter({
    minVal: 0,
    maxVal: 20
});
```
