import ChargeSection from './components/Charge/index.js';
import OrderSection from './components/Order/index.js';
import { observer } from './Observer.js';

function app() {
  const charge = new ChargeSection();
  const order = new OrderSection();

  observer.subscribe(charge);
  observer.subscribe(order);
  observer.notify();
}

app();
