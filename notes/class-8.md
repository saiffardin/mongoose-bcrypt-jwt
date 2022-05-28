## How to setup env variable to node:
- create a file named as `config.env` or `.env`
- install `dotenv` package
- call `dotenv.config()` if your env file name is `.env`
    - but if your file name is like *config.env*, then pass file path like: `dotenv.config({path:'./config.env'})`
    ```js
    const dotenv = require('dotenv');
    dotenv.config({path:'./config.env'});
    ```

---
## Authentication: *(27min 17sec)*

- we can validate data using `joi` package.
- we have to encrypt user's password using `bcrypt` package.

### How to encrypt using `bcrypt@5.0.0` package:

```js
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(myPlaintextPassword, salt);
// Store 'hashPassword' in DB.
```
---
## JWT: *(01hr 03min 00sec)*
Major 2 types of Authentication:
1. Session Based
2. Token Based

---
## Login with salt: *(01hr 06min 15sec)*

```js
// Load hash from your password DB.
const validUser = await bcrypt.compare(inputTextPassword, dbHashPassword); // true
const validUser = await bcrypt.compare(someOtherPlaintextPassword, dbHashPassword); // false
```
---

## Generate JWT: *(01hr 12min 25sec)* :

- `npm i jsonwebtoken`
- google *mongoose schema methods*, read docs
- `jwt.sign({},secret_key)`
    - 1st param is common infos we want to pass.
    - 2nd param is a *secret_key*, we've to keep this private.

```js
const jwt = require('jsonwebtoken');

const userSchema = new Schema({...});

userSchema.methods.myFuncName = function() {
    const token = jwt.sign({},secret_key)
}

```