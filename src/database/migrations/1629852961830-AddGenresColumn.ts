import {MigrationInterface, QueryRunner} from "typeorm";

export class AddGenresColumn1629852961830 implements MigrationInterface {
    name = 'AddGenresColumn1629852961830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` ADD `genres` varchar(300) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `genres`");
    }

}
