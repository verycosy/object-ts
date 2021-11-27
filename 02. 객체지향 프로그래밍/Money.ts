import Big from 'big.js';

class Money {
  public static readonly ZERO: Money = Money.wons(0);

  public static wons(amount: number): Money {
    return new Money(Big(amount));
  }

  constructor(private readonly amount: Big) {}

  public plus(amount: Money): Money {
    return new Money(this.amount.add(amount.amount));
  }

  public minus(amount: Money): Money {
    return new Money(this.amount.sub(amount.amount));
  }

  public times(percent: number): Money {
    return new Money(this.amount.mul(Big(percent)));
  }

  public isLessThan(other: Money): boolean {
    return this.amount.cmp(other.amount) < 0;
  }

  public isGreaterThanOrEqual(other: Money): boolean {
    return this.amount.cmp(other.amount) >= 0;
  }
}

export default Money;
