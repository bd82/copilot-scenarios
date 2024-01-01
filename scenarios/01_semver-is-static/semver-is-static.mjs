export { semverIsStatic }

/**
 * TODO: document
 */
function semverIsStatic (version) {
    // anything that is not a range: https://github.com/npm/node-semver#ranges
    const isStatic = /^(?<prefix>=?v?)(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?<tag>-.+)?$/.test(version)
    return isStatic
}