import Audience from './Audience';
import TicketOffice from './TicketOffice';

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public sellTo(audience: Audience): void {
    this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()));
  }
}

export default TicketSeller;
