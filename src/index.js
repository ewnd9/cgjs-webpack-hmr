'use strict';

const mod = require('./a');
mod.hello();

if (module.hot) {
  module.hot.accept('./a', () => {
    require('./a').hello();
  });
}
