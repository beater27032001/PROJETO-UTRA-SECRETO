import { EntityRepository, Repository } from "typeorm";
import { AnimeEp } from "../entities/AnimeEp";

@EntityRepository(AnimeEp)
class AnimeEpsRepository extends Repository<AnimeEp> {}

export { AnimeEpsRepository };