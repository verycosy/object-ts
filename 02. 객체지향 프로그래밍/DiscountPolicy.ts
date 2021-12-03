import DiscountCondition from './DiscountCondition';
import Money from './Money';
import Screening from './Screening';

abstract class DiscountPolicy {
  constructor(private conditions: DiscountCondition[] = []) {}

  public calculateDiscountAmount(screening: Screening): Money {
    for (let each of this.conditions) {
      if (each.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;
