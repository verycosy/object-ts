import { Duration } from 'js-joda';
import DiscountPolicy from './DiscountPolicy';
import Money from './Money';
import Screening from './Screening';

class Movie {
  constructor(
    private title: string,
    private runningTime: Duration,
    private fee: Money,
    private discountPolicy: DiscountPolicy
  ) {}

  public getFee(): Money {
    return this.fee;
  }

  public calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }
}

export default Movie;
