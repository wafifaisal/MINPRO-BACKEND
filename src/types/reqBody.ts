import { ITicketCartItem } from "./ticketCart";

export interface requestBody {
  userPoint: number;
  userCoupon: boolean;
  total_price: number;
  final_price: number;
  ticketCart: ITicketCartItem[];
}
