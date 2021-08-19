import { EntityRepository, Repository } from "typeorm";
import { Title } from "../entities/Title";

@EntityRepository(Title)
class TitlesRepository extends Repository<Title> {}

export { TitlesRepository };