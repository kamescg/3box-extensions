const uuidv1 = require('uuid/v1');
const reducerActions = (state, action) => {
  const { id, type, payload, instance } = action
  switch (action.type) {
    case 'CLOSE_PORTAL':

      switch (instance) {
        case 'toasts':
          let toasts = state.store[instance]
          const r = toasts.splice(id, 1)
          return {
            ...state,
            store: {
              ...state.store,
              [instance]: toasts,
            }
          }
          break;

        default:
          return {
            ...state,
            isActive: false,
            store: {
              ...state.store,
              [instance]: [

              ],
            }
          }
      }

    case 'OPEN_PORTAL':
      return {
        ...state,
        isActive: true,
        store: {
          ...state.store,
          [instance]: [
            ...state.store[instance],
            {
              ...action,
              delta: uuidv1()
            },
          ],
        }
      }
    default:
      console.log(action)
    // throw new Error(`No Reducer Type Set`);
  }
}

export default reducerActions