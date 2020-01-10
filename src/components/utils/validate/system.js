const userAgent = window.navigator.userAgent.toLowerCase();
function systemVali(system) {
  const systemReg = {
    ios: /[iphone|ipad]/,
    andriod: /[android]/,
  };
  return systemReg[system].test(userAgent);
}
export default systemVali;
