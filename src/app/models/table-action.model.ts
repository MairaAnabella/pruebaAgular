//Acciones de la tabla

import { TABLE_ACTION } from "../enum/table-action.enum";

export interface TableAction <T =any>{
    action: TABLE_ACTION,
    row:T

}