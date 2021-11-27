import { DayOfWeek, Duration, LocalTime } from 'js-joda';
import AmountDiscountPolicy from '../AmountDiscountPolicy';
import Money from '../Money';
import Movie from '../Movie';
import PercentDiscountPolicy from '../PercentDiscountPolicy';
import PeriodCondition from '../PeriodCondition';
import SequenceCondition from '../SequenceCondition';

describe('Movie', () => {
  it('', () => {
    const avatar = new Movie(
      '아바타',
      Duration.ofMinutes(120),
      Money.wons(10000),
      new AmountDiscountPolicy(Money.wons(800), [
        new SequenceCondition(1),
        new SequenceCondition(10),
        new PeriodCondition(
          DayOfWeek.MONDAY,
          LocalTime.of(10, 0),
          LocalTime.of(11, 59)
        ),
        new PeriodCondition(
          DayOfWeek.THURSDAY,
          LocalTime.of(10, 0),
          LocalTime.of(20, 59)
        ),
      ])
    );

    const titanic = new Movie(
      '타이타닉',
      Duration.ofMinutes(180),
      Money.wons(11000),
      new PercentDiscountPolicy(0.1, [
        new PeriodCondition(
          DayOfWeek.TUESDAY,
          LocalTime.of(14, 0),
          LocalTime.of(16, 59)
        ),
        new SequenceCondition(2),
        new PeriodCondition(
          DayOfWeek.THURSDAY,
          LocalTime.of(10, 0),
          LocalTime.of(13, 59)
        ),
      ])
    );
  });
});
