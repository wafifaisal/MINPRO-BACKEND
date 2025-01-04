import { ITicketCartItem } from "./ticketCart";

export interface requestBody {
  total_price: number;
  final_price: number;
  ticketCart: ITicketCartItem[];
}
