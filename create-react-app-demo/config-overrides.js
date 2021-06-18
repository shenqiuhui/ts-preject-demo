const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libaryName: 'antd',
    libaryDirectory: 'es',
    style: 'css'
  })
);
