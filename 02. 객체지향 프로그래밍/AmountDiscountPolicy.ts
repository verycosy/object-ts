import DiscountCondition from './DiscountCondition';
import DiscountPolicy from './DiscountPolicy';
import Money from './Money';
import Screening from './Screening';

class AmountDiscountPolicy extends DiscountPolicy {
  constructor(private discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}

export default AmountDiscountPolicy;
