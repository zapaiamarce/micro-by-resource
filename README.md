```js
import byResource from "micro-by-resource";

export default byResource({
  test(req, res) {
    res.send({ ok: true });
  },
  otro(req, res) {
    res.send({ otro: true });
  },
});
```