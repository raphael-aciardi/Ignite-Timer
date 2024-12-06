import { createContext, useState, useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from "../reducers/cylces/reducer";
import { addNewCycleAction, interruptCurrentCycleAction, marckCurrentCycleAsFinishedAction } from "../reducers/cylces/actions";
import { differenceInSeconds } from "date-fns";


export const CyclesContext = createContext({} as CyclesContextType)

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextProviderProps {
  children: React.ReactNode
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {

  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
  },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0'
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)


  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(), new Date(activeCycle.startDate)
      )
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  })


  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function markCurrentCycleAsFinished() {
    dispatch(marckCurrentCycleAsFinishedAction())
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }



  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>)
}