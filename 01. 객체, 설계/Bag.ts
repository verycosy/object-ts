import { Nullable } from '../types';
import Invitation from './Invitation';
import Ticket from './Ticket';

class Bag {
  private amount: number;
  private invitation: Nullable<Invitation>;
  private ticket: Nullable<Ticket>;

  constructor(amount: number, invitation?: Invitation) {
    this.amount = amount;
    this.invitation = invitation ?? null;
    this.ticket = null;
  }

  public hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  private hasInvitation(): boolean {
    return this.invitation !== null;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public hasTicket(): boolean {
    return this.ticket !== null;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}

export default Bag;
