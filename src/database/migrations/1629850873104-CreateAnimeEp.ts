import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAnimeEp1629850873104 implements MigrationInterface {
    name = 'CreateAnimeEp1629850873104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `anime_eps` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(250) NOT NULL, `description` varchar(1000) NOT NULL DEFAULT 'No description provided', `season` int NOT NULL DEFAULT '1', `path` varchar(255) NOT NULL DEFAULT 'no_image', `animeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `animes` ADD `seasonsQtd` int NOT NULL");
        await queryRunner.query("ALTER TABLE `animes` CHANGE `path` `path` varchar(255) NOT NULL DEFAULT 'no_image'");
        await queryRunner.query("ALTER TABLE `anime_eps` ADD CONSTRAINT `FK_839fcf0513a8dbe52130f5a199c` FOREIGN KEY (`animeId`) REFERENCES `animes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `anime_eps` DROP FOREIGN KEY `FK_839fcf0513a8dbe52130f5a199c`");
        await queryRunner.query("ALTER TABLE `animes` CHANGE `path` `path` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `animes` DROP COLUMN `seasonsQtd`");
        await queryRunner.query("DROP TABLE `anime_eps`");
    }

}
