//import createPersistedState from "vuex-persistedstate"
import Api from '../apis/Api'

//to handle state
const state = () =>({
    //plugins: [createPersistedState()],
    employees: [],
    employee: []
})

//to handle state
const getters = {
        employee: state => state.employee,
        employees: state => state.employees
}

//to handle actions
const actions = {
    getEmployees({ commit }) {
        Api.get('/employee')
            .then(response => {
                commit('SET_EMPLOYEES', response.data)
        })
    },
    getEmployeesById({ commit },id) {
        Api.get(`/employee/${id}`)
        .then(response => {
            commit('SET_EMPLOYEESBYID', response.data)
        })
        
    },
    postEmployees({commit},employee) {
        Api.post('/employee',employee).
        then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    },
    updateEmployee({commit},employee) {
        Api.put(`/employee/${employee.id}`, employee).
        then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    },
    deleteEmployee({commit},id) {
        Api.delete(`/employee/${id}`).
        then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }
}

//to handle mutations
const mutations = {
    SET_EMPLOYEES(state, employees) {
        state.employees = employees
    },
    SET_EMPLOYEESBYID(state, employee) {
        state.employee = employee
    }
}

//export store module
export default {
    state,
    getters,
    actions,
    mutations
}