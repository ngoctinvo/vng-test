const { useBabelRc, override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
    useBabelRc(),
    addWebpackModuleRule({
        // do stuff with webpack
    })
);