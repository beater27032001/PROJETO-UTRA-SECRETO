import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAnimeAndTitle1623197848781 implements MigrationInterface {
    name = 'CreateAnimeAndTitle1623197848781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `titles` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `animeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `animes` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(1000) NOT NULL DEFAULT 'No description provided', `launch_year` int NOT NULL, `age_limit` int NOT NULL DEFAULT '0', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `titles` ADD CONSTRAINT `FK_5055a54a22cc87568f5f2675857` FOREIGN KEY (`animeId`) REFERENCES `animes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `titles` DROP FOREIGN KEY `FK_5055a54a22cc87568f5f2675857`");
        await queryRunner.query("DROP TABLE `animes`");
        await queryRunner.query("DROP TABLE `titles`");
    }

}
