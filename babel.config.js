const t = require("@babel/types");

module.exports = {
 plugins: [{ visitor: {
      Identifier(path) {
        const { node } = path;
        if (["foo", "bar"].includes(node.name)) {
        node.name = node.name.split('').reverse().join('');
        }
      }
    } }]
}
