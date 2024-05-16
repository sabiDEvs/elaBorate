const configs = [
    require.resolve('./dist.config.js'),
    require.resolve('./report.config.js'),
    require.resolve('./sub.config.js'),
];

module.exports = {
    extends: configs,
};