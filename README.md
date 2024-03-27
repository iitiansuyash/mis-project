# PhD Admission

### .env file format

```env
MONGODB_URL=<YOUR MONGO URL>
ACCESS_TOKEN_SECRET=<GENERATE A SECRET>

PORT=<OPTIONAL: SPECIFY PORT FOR SERVER (DEFAULT IS 3000)>
```

### Generating a secret

```js
console.log(require('crypto').randomBytes(32).toString('hex'));
```