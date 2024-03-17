import { Pig } from "./pig.model";

export interface Atividade {
    id?: string;
    nome: string;
    suinos: Pig[];
}
