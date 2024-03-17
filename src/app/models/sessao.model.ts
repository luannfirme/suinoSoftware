import { Atividade } from "./atividade.model";

export interface Sessao {
    id : string;
    data: Date;
    descricao: string;
    brincos: string[];
    atividades: Atividade[];
}
