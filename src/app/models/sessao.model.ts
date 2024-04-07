import { Atividade } from "./atividade.model";
import { Pig } from "./pig.model";

export interface Sessao {
    id? : string;
    data: Date;
    descricao: string;
    brincos: Pig[];
    atividades: Atividade[];
}
