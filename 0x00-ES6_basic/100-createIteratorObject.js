//100-createIteratorObject.js
export default function createIteratorObject(report) {
	    let departments = Object.values(report.allEmployees);

	    let employees = [];

	    for (let departmentEmployees of departments) {
		            employees.push(...departmentEmployees);
		        }

	    function* employeeIterator() {
		            for (let employee of employees) {
				                yield employee;
				            }
		        }

	    return employeeIterator();
}
