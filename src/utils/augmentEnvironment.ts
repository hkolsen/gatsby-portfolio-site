if (process.env.NODE_ENV !== 'production') {
  Error.stackTraceLimit = Infinity;
}

// Helmet is broken on newer react due to inappropriate deep equality check in shouldComponentUpdate
// See https://github.com/nfl/react-helmet/issues/441

function interopDefault(x: any) {
  if (x && x.default) {
    return x.default;
  }
  return x;
}

const isEqual = interopDefault(require('lodash/isEqual'));

// tslint:disable-next-line:no-var-requires
require('react-helmet').Helmet.prototype.shouldComponentUpdate = function(
  nextProps: any,
) {
  return !isEqual(this.props, nextProps);
};
