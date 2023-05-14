import { DataTypes, Model } from "sequelize"
import { toDefaultValue } from "sequelize/types/utils"
import db from "../config/database.config"

interface ClienteIf {
    id: string
    nome: string
    cpf: string
}

export class Cliente extends Model<ClienteIf>{}

Cliente.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize:db,
    tableName:"cliente",   
})