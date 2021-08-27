import { 
    Column, 
    Entity, 
	ManyToOne, 
    PrimaryGeneratedColumn,
} from "typeorm";
import { Anime } from "./Anime";


@Entity("titles")
class Title {
	
	@PrimaryGeneratedColumn("increment")
	readonly id: number

	@Column()
	title: string

	// anime one->many title[] @JoinColumn({ name: "animeId" })
	@ManyToOne(type => Anime, titles => Title, { eager: true })
	anime: Anime
}

export { Title };