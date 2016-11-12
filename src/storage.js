
// Based on https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
function isSupported () {
  var mod = 'item';
  try {
    window.sessionStorage.setItem(mod, mod);
    window.sessionStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
}

function save (key, value) {
  if (!isSupported) return;
  window.sessionStorage.setItem(key, value);
}

function get (key) {
  if (!isSupported) return;
  return window.sessionStorage.getItem(key);
}

module.exports.isSupported = isSupported;
module.exports.save = save;
module.exports.get = get;
