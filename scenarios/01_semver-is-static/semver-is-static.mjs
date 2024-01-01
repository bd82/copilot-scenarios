export { semverIsStatic }

/**
 * TODO: document
 * Will return true if the version is static in other words not a range, e.g.:
 */
function semverIsStatic (version) {
    // anything that is not a range: https://github.com/npm/node-semver#ranges
    const isStatic = /^(?<prefix>=?v?)(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?<tag>-.+)?$/.test(version)
    return isStatic
}