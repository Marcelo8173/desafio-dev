import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCNBA1626442539358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cnab_table",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "data",
                        type: "varchar"
                    },
                    {
                        name: "hora",
                        type: "varchar"
                    },
                    {
                        name: "valor",
                        type: "float"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "cartao",
                        type: "varchar"
                    },
                    {
                        name: "donoDaLoja",
                        type: "varchar"
                    },
                    {
                        name: "nomeDaLoja",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cnab_table')
    }

}
