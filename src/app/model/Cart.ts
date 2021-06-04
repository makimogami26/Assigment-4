export interface Cart {
    status: string,
    admin_id: string;
    product_id: string;
    brand_name: string;
    product_name: string;
    uom: string;
    quantity: number;
    price: number;
    tax: number;
    totalPrice: number;
    notes: string;
    date: any;
}