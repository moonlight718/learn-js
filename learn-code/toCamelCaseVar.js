function toCamelCaseVar(variable) {
  variable = variable.replace(/[\_|-]([a-zA-z0-9])/g, (all, letter) => {
    console.log(all, letter);
    return letter.toUpperCase();
  });
  return variable;
}
console.log(toCamelCaseVar('Foo_style_css'));
toCamelCaseVar('Foo-style-css');