import '@styles/col.styl';
import React from 'react';

export const Col = ({ size, offset, children }) => {
  return (
    <div className={ buildClassName(parseInt(size), parseInt(offset)) }>
      { children }
    </div>
  );
};

function buildClassName(size, offset){
  const sizeClass = buildSizeCssClass(size);
  const offsetClass = buildOffsetCssClass(offset);
  return `${getBaseCssClass()} ${sizeClass} ${offsetClass}`.trim();
}

function buildSizeCssClass(size){
  return size >= 1 && size <= 12 ? `${getBaseCssClass()}-${size}` : '';
}

function buildOffsetCssClass(offset){
  return offset >= 1 && offset <= 11 ? `${getBaseCssClass()}-offset-${offset}` : '';
}

function getBaseCssClass(){
  return 'col';
}
