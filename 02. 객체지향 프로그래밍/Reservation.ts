import Customer from './Customer';
import Money from './Money';
import Screening from './Screening';

class Reservation {
  constructor(
    private customer: Customer,
    private screening: Screening,
    private fee: Money,
    private audienceCount: number
  ) {}
}

export default Reservation;
