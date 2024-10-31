import {createApplication} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import 'zone.js';
import {AdressFormComponent} from "./app/adress-form/adress-form.component";
import {provideCharts, withDefaultRegisterables} from "ng2-charts";
import {GraphExampleComponent} from "./app/graph-example/graph-example.component";
import {BarD3Component} from "./app/bar-d3/bar-d3.component";

createApplication()
  .then((app) => {
    // const addressWebComponent = createCustomElement(AdressFormComponent, {injector: app.injector});
    // const graphWebComponent = createCustomElement(GraphExampleComponent, {injector: app.injector});
    const barD3WebComponent = createCustomElement(BarD3Component, {injector: app.injector});
    // customElements.define('poc-damia-address-form', addressWebComponent);
    // customElements.define('poc-damia-graph-example', graphWebComponent);
    customElements.define('poc-damia-bar-d3', barD3WebComponent);
  })
  .catch((err) => console.error(err));


//{
//   providers: [ provideCharts(withDefaultRegisterables())]
// }
