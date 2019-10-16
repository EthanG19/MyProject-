import Axios from "axios"

// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'

const initialState = {
  students: [],
  campuses: []
}
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'

export function gotAllStudentsAction(students) {
  return ({ type: GET_ALL_STUDENTS, students })
}

export function gotAllCampusesAction(campuses) {
  return ({ type: GET_ALL_CAMPUSES, campuses })
}

export function getAllCampusesThunk() {
  return async (dispatch) => {
    const { data } = Axios.get('/api/campuses')       
    gotAllCampusesAction(dispatch(data))
  }
}

export function getAllStudentsThunk() {
  return async (dispatch) => {
    const { data } = Axios.get('/api/students')
    gotAllStudentsAction(dispatch(data))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, students: action.students }
    case GET_ALL_CAMPUSES:
      return { ...state, campuses: action.campuses }
    default:
      return state
  }
}

export default rootReducer
