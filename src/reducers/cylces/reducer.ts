import { actionTypes } from "./actions";

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
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    case actionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interrupdatedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    case actionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, fineshedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    default:
      return state;
  }
}
