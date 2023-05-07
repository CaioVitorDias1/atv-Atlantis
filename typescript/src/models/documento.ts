import { TipoDocumento } from "../enums/tipoDocumento"

export default class Documento{
    public numero?: string
    public tipo?: TipoDocumento
    public dataExpedicao?: Date
}