import { Component } from '@angular/core';
import * as memoizee from 'memoizee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  constructor(){
    function add(a: number, b: number): number {
      console.log('add is called');
      return a + b;
    }
    
    const memoizedAdd = memoizee(add);
    
    memoizedAdd(1,2);  // log "add is called"
    memoizedAdd(1,2);  // cache hit, not logging
    memoizedAdd(1,3);  // log "add is called"

    var fn = function(one, two, three) {
      /* ... */
      console.log(one, two, three);
  };
   
  const memoized = memoizee(fn);
  
   
  memoized("foo", 3, "bar");
  memoized("foo", 3, "bar"); // Cache hit

  memoized.delete("foo", true);
  memoized.clear();
  }
}
