import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTitles1622175475597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "titles",
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
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKAnimes",
                        referencedTableName: "animes",
                        referencedColumnNames: ["id"],
                        columnNames: ["anime_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("titles");
    }

}
