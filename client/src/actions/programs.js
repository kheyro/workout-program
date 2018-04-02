import actionTypes from './actionTypes';
import 'isomorphic-fetch';

const programs = [
  {
    id: 1,
    title: 'Abs programs',
    description: 'Perfect program for abs',
    number_exercises: 5,
    duration: 30
  },
  {
    id: 2,
    title: 'Chest programs',
    description: 'Perfect program for chest',
    number_exercises: 9,
    duration: 60
  },
  {
    id: 3,
    title: 'Monday programs',
    description: 'Monday morning program',
    number_exercises: 10,
    duration: 45
  }
];


export function getPrograms() {
  let programs = fetch('http://localhost:3001/programs').then(res => res.json()).then(data => console.log(data))
  return {
    type: actionTypes.GET_PROGRAMS,
    payload: programs
  }
}

export function addProgram(program) {
  return {
    type: actionTypes.ADD_PROGRAM,
    payload: program
  }
}

export function updateProgram(program) {
  return {
    type: actionTypes.UPDATE_PROGRAM,
    payload: program
  }
}

export function removeProgram(programId) {
  return {
    type: actionTypes.REMOVE_PROGRAM,
    payload: programId
  }
}