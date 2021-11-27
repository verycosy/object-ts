import Ticket from './Ticket';

class TicketOffice {
  private amount: number;
  private tickets: Ticket[] = [];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets.push(...tickets);
  }

  public getTicket(): Ticket {
    const ticket = this.tickets.shift();

    if (!ticket) {
      throw new Error('Not enough ticket');
    }

    return ticket;
  }

  public minusAmount(amount: number): void {
    this.amount -= amount;
  }

  public plusAmount(amount: number): void {
    this.amount += amount;
  }
}

export default TicketOffice;
