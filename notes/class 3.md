# Node Module System:

## Global Object:
- nodeJS has something called **global object**.
- build onk functions like `console.log()`, `setTimeout()` - egula oi *global object* er moddhe thake.
- `console.log()` likhle ami j o/p ta pabo, shei same o/p tai pabo jodi `global.console.log()` lkikhi

    ```js
    console.log('hello world');
    global.console.log('hello world');
    // both will have same outputs
    ```
    ---
## Types of Node Module System (NMS):
NMS each file k ekta module hishebe treat kore. Module gular *export*-*import* korar jonno NMS a 2 ta *school-of-thought* ache, such:
1. CommonJS
2. ECMAScript

### 1. **CommonJS** :
We've to use -
- `require('path')` to *import* something.
- `module.exports = {...}` to *export* something.
- backend er kaaj korar shomoy most of the time commonJS use kora hoy.
- *package.json* a `type:commonjs` lekha lage (or na likhle by default *commonjs* dhore nei)
- its synchronous.
### 2. **ECMAScript** :
We've to use -
- `import xyz from 'path'` to *import* something.
- `module.exports = {...}` to *export* something.
- backend er kaaj korar shomoy most of the time commonJS use kora hoy.
- *package.json* a  `type:module` likhte hobe, otherwise it would treat it as *commonjs*.
- its asynchronous.
---
## Semantic Versioning:
- major.minor.patch
    - *patch update:* issue fixed, noting new is been added.
        - **~** *(tilde sign)* means to install latest **patch** update
    - *minor update:* new features are added, but nothing will break if been updated.
        - **^** *(caret sign)* means to install latest **minor** update
    - *major update:* breaking changes have been bought, update may crash the system.
---
## Few npm commands:
- npm *outdated*
- npm *updated*
- npm *list -g*