const { merge } = require('webpack-merge');
const dist = require('./dist.config.js');
const sub = require('./sub.config.js');
const report = require('./report.config.js');
module.exports = merge(report ,sub, dist);