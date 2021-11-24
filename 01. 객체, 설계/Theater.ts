import Audience from './Audience';
import TicketSeller from './TicketSeller';

class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  public enter(audience: Audience): void {
    this.ticketSeller.sellTo(audience);
  }
}

export default Theater;

/**
 * 자기 자신의 문제를 스스로 해결하도록 코드를 변경.
 * 직관에 따랐고, 그 결과로 코드는 변경이 용이하고 이해 가능하도록 수정됐다.
 */
