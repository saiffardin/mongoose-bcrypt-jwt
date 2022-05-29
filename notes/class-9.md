## Verification of JWT:
- Will create a *middleware*, this will do the authorization. - *authorize.js*

- most of the time jwt will come within the *header* of an http request

- REST api is stateless. Means each req is independent of each other.

```js
const jwt = require('jsonwebtoken);

module.exports = function(req,res,next){
    // get the request header
    // Authorization: Bearer <token>

    let token = req.header('Authorization');

    if (!token) return res.status(401).send('Access denied');

    token = token.split(' ')[1].trim();

    // verify token
    try{
        const decode = jwt.verify(token, JWT_SECRET_TOKEN);
        next();
    } catch(err){
        return res.status(400).send('Invalid token.');
    }
}
```

---

## User-Admin Authorization: *(28min 45sec)*