

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'

export function gotAllStudentsAction(students) {
    return ({ type: GET_ALL_STUDENTS, students })
}

export function getAllStudentsThunk() {
    return async (dispatch) => {
      const { data } = Axios.get('/api/students')
      gotAllStudentsAction(dispatch(data))
    }
  }

  const StudentsReducer = (state = [], action) => {
    switch (action.type) {
      case GET_ALL_STUDENTS:
        return action.students 
      default:
        return state
    }
  }
  