import Audience from './Audience';
import TicketSeller from './TicketSeller';

// 소극장은
class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  public enter(audience: Audience): void {
    // 관람객의 가방을 열어 그 안에 초대장이 들어 있는지 살펴본다
    if (audience.getBag().hasInvitation()) {
      // 판매원은 매표소에 보관돼 있는 티켓을 관람객의 가방 안으로 옮긴다
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();
      // 관람객의 가방에서 티켓 금액만큼의 현금을 꺼내 매표소에 적립한 후 매표소에 보관돼 있는 티켓을 관람객의 가방 안으로 옮긴다
      audience.getBag().minusAmount(ticket.getFee());
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}

export default Theater;

/**
 * 관람객과 판매원이 소극장의 통제를 받는 수동적인 존재.
 * 소극장이라는 제 3자가 초대장을 확인하기 위해 관람객의 가방을 마음대로 열어 보고 돈을 가져간다.
 * 소극장은 판매원의 허락없이 매표소에 보관된 티켓과 현금에 마음대로 접근할 수 있다.
 * 티켓을 꺼내 관람객의 가방에 집어넣고 돈을 매표소에 적립하는 일 또한 소극장이 수행한다.
 *
 * 현실에서는 관람객이 직접 자신의 가방에서 초대장을 꺼내 판매원에게 건넨다.
 * 티켓을 구매하는 관람객은 가방 안에서 돈을 직접 꺼내 판매원에게 지불한다.
 * 판매원은 매표소에 있는 티켓을 직접 꺼내 관람객에게 건네고 관람객에게서 직접 돈을 받아 매표소에 보관한다.
 *
 * 현재의 코드는 우리의 상식과 다르게 동작하기 때문에 코드를 읽는 사람과 제대로 의사소통하지 못한다.
 */

/**
 * 세부사항을 기억해야 한다.
 * enter 메서드를 이해하기 위해서는 Audience가 Bag을 가지고 있고, Bag 안에는 현금과 티켓이 들어 있으며
 * TicketSellter가 TicketOffice에서 티켓을 판매하고, TicketOffice 안에 돈과 티켓이 보관돼 있다는 모든 사실을 동시에 기억하고 있어야 한다.
 *
 * 현재의 코드는 하나의 클래스나 메서드에서 너무 많은 세부사항을 다루기 때문에 작성하는 사람과 읽는 사람에게 부담을 준다.
 */

/**
 * 가장 큰 문제는 결합도가 너무 높아 변경에 취약하다는 것.
 * 관람객에게 가방이 없다면? 현금이 아니라 신용카드 결제라면? 매표소 밖에서 티켓을 판매한다면?
 *
 * 클래스 A가 클래스 B에 대해 많이 알면 알수록 변경하기 어려워 진다.
 */
