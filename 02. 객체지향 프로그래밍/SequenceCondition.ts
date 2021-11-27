import DiscountCondition from './DiscountCondition';
import Screening from './Screening';

class SequenceCondition implements DiscountCondition {
  constructor(private sequence: number) {}

  public isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence);
  }
}

export default SequenceCondition;
