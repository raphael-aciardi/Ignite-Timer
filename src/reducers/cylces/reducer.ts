import { actionTypes } from "./actions";
import { produce } from "immer";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interrupdatedDate?: Date;
  fineshedDate?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}



export function cyclesReducer(state: CycleState, action: any) {
  switch (action.type) {
    
    case actionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id
      })
    case actionTypes.INTERRUPT_CURRENT_CYCLE:
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })

        if (currentCycleIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.activeCycleId = null;
          draft.cycles[currentCycleIndex].interrupdatedDate = new Date()
        })
      
      
    case actionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      const currentCycleIndexFineshed = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndexFineshed < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndexFineshed].fineshedDate = new Date()
      })
    
    default:
      return state;
  }
}
