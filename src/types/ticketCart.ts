export interface ITicketCartItem {
  quantity: number;
  Ticket: {
    id: number;
    price: number;
    seats: number;
  };
}
