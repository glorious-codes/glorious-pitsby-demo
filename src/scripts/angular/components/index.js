import alert from '@angular/components/alert/alert';
import button from '@angular/components/button/button';
import col from '@angular/components/col/col';
import row from '@angular/components/row/row';

export default angular.module('components', [])
  .component('pdAlert', alert)
  .component('pdButton', button)
  .component('pdCol', col)
  .component('pdRow', row)
  .name;
