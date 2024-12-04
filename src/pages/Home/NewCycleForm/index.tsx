import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "..";
import { useFormContext } from "react-hook-form";



export function NewCycleForm() {

    const {activeCycle} = useContext(CyclesContext)
    const { register } = useFormContext()

    return  (
    <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
        id="task" 
        disabled={!!activeCycle}
        list="task-suggestions" 
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        />
        <datalist id="task-suggestions" > 
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
        </datalist>

        <label htmlFor="">durante</label>
        <MinutesAmountInput
            type="number"
            id="minutesAmount" 
            disabled={!!activeCycle}
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
        />
        <span>minutos.</span>
    </FormContainer>
    )
}