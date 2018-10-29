import meta from './meta';
import styleSheets from './styleSheets';

const metaAndStyleSheets = meta
  .concat(styleSheets)
  .map((element, j) => ({ ...element, key: j }));

export default metaAndStyleSheets;
