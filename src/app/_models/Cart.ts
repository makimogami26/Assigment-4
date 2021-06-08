export interface Cart {
  _id: string;
  status: string;
  admin_id: string;
  product_id: string;
  product: string;
  quantity: number;
  price: number;
  tax: number;
  totalPrice: number;
  notes: string;
  date: any;
}
