import { Pig } from "./pig.model";

export interface Atividade {
    id?: string;
    nome: string;
    data: Date,
    suinos: Pig[];
}
