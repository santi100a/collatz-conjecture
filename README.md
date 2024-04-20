# Library Name

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/collatz-conjecture/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100a/collatz-conjecture
[stars badge]: https://img.shields.io/github/stars/santi100a/collatz-conjecture.svg
[license badge]: https://img.shields.io/github/license/santi100a/collatz-conjecture.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100a/collatz-conjecture
[npm home]: https://npmjs.org/package/@santi100a/collatz-conjecture
[repo actions]: https://github.com/santi100a/collatz-conjecture/actions
[repo url]: https://github.com/santi100a/collatz-conjecture
[bundlephobia url]: https://bundlephobia.com/package/@santi100a/collatz-conjecture@latest

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js

## What's this?

This is a library that generates the [Collatz sequence](https://en.m.wikipedia.org/Collatz_conjecture) for any positive integer.
Let $ n_0 $ be the initial number, a non-zero positive integer. The conjecture claims that the sequence

$$
n_k =  \begin{cases}
  \frac 1 2 \cdot n_{k-1} & n_{k-1} \in \{2, 4, 6, 8, \dots\} \\
  3\cdot n_{k-1} + 1      & n_{k-1} \in \{1, 3, 5, 7, \dots\}
 \end{cases}
$$

converges eventually to the infinite loop $ {4, 2, 1, 4, 2, 1, \dots} $ for all natural numbers (integers strictly greater than zero). As of this writing (April 2024), this behavior hasn't been proven or disproven.

## Installation

- Via NPM: `npm install @santi100a/collatz-conjecture`
- Via Yarn: `yarn add @santi100a/collatz-conjecture`
- Via PNPM: `pnpm install @santi100a/collatz-conjecture`

## API

- `function collatzSequence(n: number): number[];` Calculates the Collatz sequence for a given number.

  | Name | Type     | Description                                       | Optional? | Default |
  | ---- | -------- | ------------------------------------------------- | --------- | ------- |
  | `n`  | `number` | The number to calculate the Collatz sequence for. | No        | _N/A_   |

## Usage

```typescript
// Import the collatzSequence function
const collatzSequence = require('@santi100a/collatz-conjecture');

// Example usage
const input = 5;
console.log(`Collatz sequence for input ${input}:`);
const sequence = collatzSequence(input);
console.log(sequence);
```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/collatz-conjecture/issues) or [pull request](https://github.com/santi100a/collatz-conjecture/pulls)!
Look at [the contribution instructions](https://github.com/santi100a/collatz-conjecture/CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](https://github.com/santi100a/collatz-conjecture/CODE_OF_CONDUCT.md).
