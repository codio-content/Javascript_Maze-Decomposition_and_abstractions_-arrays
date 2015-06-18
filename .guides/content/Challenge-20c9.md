|||challenge
We want you to do 2 things here.

1. Create an empty array called `numArray`
2. Use a loop to populate the array with 5 elements. The value for each element should be the index multiplied by 10.
3. Create another loop that outputs all of the array element values.

If you look at the previous page, you can see how we use loops to read from the arrays. 

In this challenge, rather than reading, you are doing an assignment just as you did with variables.

When you are ready to run your code press the 'reload' button on the left or the 'Check It!!' button below to have your solution assessed.

{Check It!!|custom}(ch-1)

|||

|||guidance
## Solution
```javascript
numArray = []

for (i=0; i<5; i++) {
  numArray[i] = i*10
}

for (i=0; i<5; i++) {
  output(numArray[i], true)
}
```
|||
