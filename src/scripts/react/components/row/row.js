import React from 'react';

export const Row = ({ offset, children }) => {
  return (
    <div className={ buildClassName(offset) }>
      { children }
    </div>
  );
};

function buildClassName(offset){
  const offsetClass = buildOffsetClassName(offset);
  return `${getBaseCssClass()} ${offsetClass}`.trim();
}

function buildOffsetClassName(offset){
  return offset >= 1 && offset <= 10 ? `${getBaseCssClass()}-offset-${offset}` : '';
}

function getBaseCssClass(){
  return 'pd-row';
}
