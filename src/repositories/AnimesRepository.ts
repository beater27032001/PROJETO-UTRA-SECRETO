import { EntityRepository, Repository } from "typeorm";
import { Anime } from "../models/Anime";

@EntityRepository(Anime)
class AnimesRepository extends Repository<Anime> {}

export { AnimesRepository };