import { toaster } from '@angular/services/toaster/toaster';

export default angular.module('services', [])
  .service('toaster', toaster)
  .name;
