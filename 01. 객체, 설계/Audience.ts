import Bag from './bag';
import Ticket from './ticket';

class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  public buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}

export default Audience;
