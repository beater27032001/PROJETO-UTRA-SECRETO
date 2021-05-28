import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAnimesAndTitles1622181841604 implements MigrationInterface {
    name = 'CreateAnimesAndTitles1622181841604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `titles` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `animeIdId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `animes` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(1000) NOT NULL DEFAULT 'No description provided', `launch_year` int NOT NULL, `age_limit` int NOT NULL DEFAULT '0', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `titles` ADD CONSTRAINT `FK_9ec99265d6f24aa7db9f6a35dd6` FOREIGN KEY (`animeIdId`) REFERENCES `animes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `titles` DROP FOREIGN KEY `FK_9ec99265d6f24aa7db9f6a35dd6`");
        await queryRunner.query("DROP TABLE `animes`");
        await queryRunner.query("DROP TABLE `titles`");
    }

}
