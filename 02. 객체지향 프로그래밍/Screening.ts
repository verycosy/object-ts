import { LocalDateTime } from 'js-joda';
import Customer from './Customer';
import Money from './Money';
import Movie from './Movie';
import Reservation from './Reservation';

class Screening {
  constructor(
    private movie: Movie,
    private sequence: number,
    private whenScreend: LocalDateTime
  ) {}

  public getStartTime() {
    return this.whenScreend;
  }

  public isSequence(sequence: number): boolean {
    return this.sequence === sequence;
  }

  public getMovieFee() {
    return this.movie.getFee();
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  public reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }
}

export default Screening;
