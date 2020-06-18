const SymbolPolyfill = function Symbol(description) {
  if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

  let descString;
  description === undefined ? descString = undefined : descString = String(description);

  let symbol = Object.create(SymbolPolyfill.prototype);
  Object.defineProperties(symbol, {
    __Description__: d('c', descString),
    __Name__: d('c', generateName(descString)),
  });

  return symbol;
}

const generateName = (function() {
  const created = {};

  return function (description, internal) {
    const postfix = created[description] = created[description] === undefined ? 1 : created[description] + 1
    return `@@${description || ''}${ postfix }`;
  }
}());
SymbolPolyfill(12);
