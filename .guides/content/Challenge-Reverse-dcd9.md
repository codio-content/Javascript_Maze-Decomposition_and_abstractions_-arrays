|||challenge
The code on the left has already created an array of strings. Your job is to output the string so they appear as shown below. It's trickier than you think.

```javascript
Mary
Had
A
Little
Lamb
```

**Hints**
- Use `strArray.length` in your loop to find out how many elements the array has
- Your `for` loop should start at 4
- You need to decrease your counter, not increase it

|||

|||guidance
## Solution
```javascript
strArray = ['Lamb', 'Little', 'A', 'Had', 'Mary']

for(i=4; i>=0; i--) {
  output(strArray[i], true)
}
```
|||