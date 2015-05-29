So far, we've been using an object that is created by our game framework, which is hidden away from you.

Now let's see how we can create our own object.

Let's say we want to create an object that stores the following information each time a turn is taken

- The X and Y coordinates of the player
- The current score
- The current amount of energy
- The last key pressed

## Object creation
There are actually 2 ways to create a new object in Javascript

1. `gameDetails = new Object` as shown in the code
1. You can also use `gameDetails = {}`
