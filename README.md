# express-safe-redirect

Middleware save extended express res.
You can use res.safeRedirect()

## Usage

###app.js

```javascript
var app = require('express')();
app.use(require('express-safe-redirect')());
```

###res.safeRedirect(String);

###example

If you want save get params on redirect use that middleware

User open page: //somesite.com/?article=1

```javascript

res.safeRedirect('/main');

```

User enter on //somesite.com/main/?article=1

*PROOF!*