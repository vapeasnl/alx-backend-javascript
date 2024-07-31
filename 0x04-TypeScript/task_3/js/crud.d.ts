import {RowElement, RowID} from "./interface";

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): number;
export declare function updateRow(rowId: RowID, row: RowElement): number;
