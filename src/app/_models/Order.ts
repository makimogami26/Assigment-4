export interface Order {
    status: string,
    suplier_name: string,
    product_id: string,
    brand_name: string,
    uom: string,
    buyPrice: number,
    discount: number,
    quantity: number,
    subTotal: number,
    arrived: number,
    isAfterTax: string,
}