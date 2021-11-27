import DiscountCondition from './DiscountCondition';
import DiscountPolicy from './DiscountPolicy';
import Money from './Money';
import Screening from './Screening';

class PercentDiscountPolicy extends DiscountPolicy {
  constructor(private percent: number, conditions: DiscountCondition[]) {
    super(conditions);
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}

export default PercentDiscountPolicy;
