import DiscountPolicy from './DiscountPolicy';
import Money from './Money';
import Screening from './Screening';

class NoneDiscountPolicy extends DiscountPolicy {
  protected getDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }
}

export default NoneDiscountPolicy;
