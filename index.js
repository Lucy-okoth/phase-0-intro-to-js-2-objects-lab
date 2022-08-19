// Write your solution in this file!
let employee={
    name: 'Lucy',
    streetAddress: '20 Ogongo'

}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const update={...employee}
    update[key]=value
    return update
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name="Sam"
    employee.streetAddress='12 Broadway'
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    employee[key] = value
    return employee
}