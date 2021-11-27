import { DayOfWeek, LocalTime } from 'js-joda';
import DiscountCondition from './DiscountCondition';
import Screening from './Screening';

class PeriodCondition implements DiscountCondition {
  constructor(
    private dayOfWeek: DayOfWeek,
    private startTime: LocalTime,
    private endTime: LocalTime
  ) {}

  public isSatisfiedBy(screening: Screening): boolean {
    return (
      screening.getStartTime().dayOfWeek().equals(this.dayOfWeek) &&
      this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
      this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0
    );
  }
}

export default PeriodCondition;
