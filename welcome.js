/**
 * Created by nikita on 16.11.16.
 */

'use strict';

export default function (message) {
  if(NODE_ENV == 'development'){
    console.log(message)
  }
  debugger;
  alert(`Welcome ${message}`)
};
