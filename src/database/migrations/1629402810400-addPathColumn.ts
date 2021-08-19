import {MigrationInterface, QueryRunner} from "typeorm";

export class addPathColumn1629402810400 implements MigrationInterface {
    name = 'addPathColumn1629402810400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` ADD `path` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `path`");
    }

}
