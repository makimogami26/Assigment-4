import { Time } from "@angular/common";
import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface Invoice {
    _id : object,
    status: string,
    suplier_name: string,
    orders: string[],
    bill: number,
    createAt : Time
}