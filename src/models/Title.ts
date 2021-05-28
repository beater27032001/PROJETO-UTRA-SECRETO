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

	@ManyToOne(() => Anime)
	anime_id: string
}

export { Title };