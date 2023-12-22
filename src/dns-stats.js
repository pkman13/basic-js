const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const arrDNS = {};

  domains.forEach((domain) => {
    const domainParts = domain.split('.').reverse();

    let currentDNS = '';
    domainParts.forEach((part) => {
      currentDNS += `.${part}`;

      arrDNS[currentDNS] = (arrDNS[currentDNS] || 0) + 1;
    });
  });

  return arrDNS;
}

//   domains = [
// 'epam.com'
//   ]
//   const resalt  = getDNSStats(domains)
//   console.log(resalt)

module.exports = {
  getDNSStats
};
