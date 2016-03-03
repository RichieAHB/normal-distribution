# NormalDistribution #
https://github.com/RichieAHB/normal-distribution

A small javascript module for working with normal distributions.

The class can be instantiated like so:
```javascript
const normDist = new NormalDistribution(mean, standardDeviation);
```
With no arguments the distribution will be a standard normal distribution with `mean = 0` and `standardDeviation = 1`.

___

The four main methods that can be called are:
### #pdf(value) ###
Accepts an integer argument and returns the probability denisty at that point in the distribution; useful for drawing the curve.

### #cdf(value) ###
Accepts an integer argument and returns the probability of a random variable being below the one argument passed to the method.

### #probabilityBetween(value1, value2) ###
Accepts two integer arguments and returns the probability of a random variable being between the two arguments passed.

### #zScore(value) ###
Accepts an integer argument and returns the z-score for that value.
___

*Note: the z-table used in this module gives probabilities for up to 3.5 standard deviations from the mean*