import { 
	Column, 
	Entity, 
	PrimaryGeneratedColumn, 
	ManyToOne,
} from "typeorm"
import { Anime } from "./Anime";


@Entity("anime_eps")
class AnimeEp {
	
	@PrimaryGeneratedColumn("increment")
	readonly id: number

	@Column({ length: 250 })
	name: string

    @Column({ length: 1000, default: "No description provided" })
	description: string

	@Column({ default: 1 })
	season: number

	@Column({ default: "no_image" })
	path: string

    // anime one->many animeEp[] @JoinColumn({ name: "animeId" })
	@ManyToOne(type => Anime, animeEps => AnimeEp, { eager: true })
	anime: Anime
}

export { AnimeEp };