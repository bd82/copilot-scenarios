/**
 * These are bad implementation of addProperty.
 * Can you spot the problem?
 * What is the common bad practice shared by these two implementations?
 */
function addProperty(obj, key, value) {
  obj[key] = value
  return obj
}

function addProperty2(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}
