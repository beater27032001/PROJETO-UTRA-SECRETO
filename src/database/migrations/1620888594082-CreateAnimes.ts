import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnimes1620888594082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "animes",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "titles",
                        type: "varchar",
                        isArray: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        default: "No description provided"
                    },
                    {
                        name: "launch_year",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "age_limit",
                        type: "int",
                        default: 0,
                        isNullable: true
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("animes");
    }

}
