import React from 'react';

import { classNames } from './../../utils/index';

type TRow = {
  className?: string;
};

const Row: React.FC<TRow> = props => {
  return (
    <div aria-label='row' className={classNames('flex flex-wrap', props.className ?? '')}>
      {props.children}
    </div>
  );
};

Row.displayName = 'Row';
export default Row;
