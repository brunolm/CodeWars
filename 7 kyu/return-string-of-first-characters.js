// http://www.codewars.com/kata/return-string-of-first-characters/solutions/javascript/me

/*       */
const ms = (s) => s.split(' ').map(c => c[0]).join('');
function makeString(s) {
  console.log(ms('\u0041\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u006e\u006f\u0074\u0069\u006f\u006e\u0020\u0064\u0065\u0066\u0069\u006e\u0069\u0074\u0069\u006f\u006e\u0020\u0048\u0075\u006d\u006f\u0072\u0020\u0069\u0067\u006e\u0069\u0074\u0065\u0020\u0073\u0065\u006c\u0065\u006e\u0069\u0075\u006d\u0020\u004e\u006f\u0074\u0069\u006f\u006e\u0020\u0061\u0064\u0061\u006d\u0061\u006e\u0074\u0069\u006e\u0065\u0020\u006d\u0065\u0072\u006d\u0061\u0069\u0064\u0020\u0065\u0073\u0071\u0075\u0065\u006c\u0065\u0074\u006f\u006e\u0020\u0049\u006e\u0074\u0065\u0072\u0069\u006f\u0072\u0020\u0073\u006f\u006c\u0075\u0074\u0069\u006f\u006e\u0020\ud83c\u00dfba\u0020\u004a\u006f\u0079\u0066\u0075\u006c\u0020\u004f\u006e\u0020\u0048\u0061\u006e\u0067\u0061\u0072\u0020\u004e\u0069\u006e\u0065\u0020\ud83c\u00dfba\u0020\u0043\u006f\u006d\u0062\u0069\u006e\u0065\u0064\u0020\u0045\u0078\u0070\u006c\u0069\u0063\u0069\u0074\u0020\u004e\u0065\u0067\u0061\u0074\u0069\u0076\u0065\u0020\u0041\u0062\u0073\u006f\u006c\u0075\u0074\u0065'));
  return ms(s);
}