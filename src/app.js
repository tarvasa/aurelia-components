//import '@babel/polyfill';

export class App {
  message = 'Hello World!';
  items = [];

  constructor(){
    for(let i = 0; i<150; i++) {
      this.items.push("Sample item " + i);
    }
  }
  
}
