import ReactDom from 'react-dom';
// import Hello from './components/demo/Hello';
// import HelloClass from './components/demo/HelloClass';
import HelloHOC from './components/demo/HelloHOC';

import './index.css';

ReactDom.render(
  // <Hello name="TypeScript" />,
  // <HelloClass name="TypeScript" />,
  <HelloHOC name="TypeScript" loading={false} />,
  document.querySelectorAll('.app')[0]
);
