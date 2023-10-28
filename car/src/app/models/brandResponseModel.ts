import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponeModel extends ResponseModel {
    data:Brand[];
}