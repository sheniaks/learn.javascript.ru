function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
//console.log(ucFirst("test"));

function checkSpam(str) {
  let strLow = str.toLowerCase();
  let strUpper = str.toUpperCase();
  return ~strUpper.indexOf("XXX") || ~strLow.indexOf("viagra") ? true : false;
}
//console.log(checkSpam("gog xxx ViAgrA viagra"));
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }

function truncate(str, maxlength) {
  return (str.length > maxlength) ? `${str.slice(0, maxlength-1)}…` : str;
}
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       `${str.slice(0, maxlength - 1)}…` : str;
//   }

function extractCurrencyValue(str) {
    return +str.slice(1);
}
//console.log(extractCurrencyValue('$120'));
