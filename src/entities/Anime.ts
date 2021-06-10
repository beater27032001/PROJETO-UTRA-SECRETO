import { 
	Column, 
	Entity, 
	PrimaryGeneratedColumn, 
	OneToMany, 
} from "typeorm"
import { Title } from "./Title"

@Entity("animes")
class Anime {
	
	@PrimaryGeneratedColumn("increment")
	readonly id: number

	// anime one->many title[]
	@OneToMany(type => Title, anime => Anime, { eager: true })
	titles: Title[]

	@Column({ length: 1000, default: "No description provided" })
	description: string

	@Column()
	launch_year: number

	@Column({ default: 0 })
	age_limit: number
}

export { Anime };