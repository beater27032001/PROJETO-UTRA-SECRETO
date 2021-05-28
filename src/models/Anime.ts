import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("animes")
class Anime {
	
	@PrimaryGeneratedColumn("increment")
	readonly id: number

	@Column({ array: true })
	titles: string

	@Column()
	description: string

	@Column()
	launch_year: number

	@Column()
	age_limit: number
}

export { Anime };