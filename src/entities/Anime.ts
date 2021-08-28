import { 
	Column, 
	Entity, 
	PrimaryGeneratedColumn, 
	OneToMany,
} from "typeorm"
import { AnimeEp } from "./AnimeEp"
import { Title } from "./Title"

@Entity("animes")
class Anime {
	
	@PrimaryGeneratedColumn("increment")
	readonly id: number

	// anime one->many title[]
	@OneToMany(type => Title, anime => Anime)
	titles: Title[]

	// anime one->many animeEP[]
	@OneToMany(type => AnimeEp, anime => Anime)
	episodes: AnimeEp[]

	@Column()
	seasonsQtd: number

	@Column({ length: 1000, default: "No description provided" })
	description: string

	@Column({ length: 300 })
	genres: string

	@Column()
	launch_year: number

	@Column({ default: 0 })
	age_limit: number

	@Column({ default: "no_cover" })
	cover_path: string

	@Column({ default: "no_banner" })
	banner_path: string
}

export { Anime };