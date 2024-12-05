import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";

export function History() {

    const { cycles } = useContext(CyclesContext)

    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>

        <pre>
            {JSON.stringify(cycles, null, 2)}
        </pre>

        <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duracao</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="green">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="yellow">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="red">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="green">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="yellow">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="yellow">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="green">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="red">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="red">Concluido</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td> 
                        <td><Status statusColor="red">Concluido</Status></td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>


        </HistoryContainer>
    )
}