import {MigrationInterface, QueryRunner} from "typeorm";

export class ReworkPathColumn1630173459231 implements MigrationInterface {
    name = 'AddCoverColumn1630173459231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `path`");
        await queryRunner.query("ALTER TABLE `animes` ADD `cover_path` varchar(255) NOT NULL DEFAULT 'no_cover'");
        await queryRunner.query("ALTER TABLE `animes` ADD `banner_path` varchar(255) NOT NULL DEFAULT 'no_banner'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `banner_path`");
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `cover_path`");
        await queryRunner.query("ALTER TABLE `animes` ADD `path` varchar(255) NOT NULL DEFAULT 'no_image'");
    }

}
