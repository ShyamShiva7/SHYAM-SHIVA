// TASK 1 — STUDENT RESULT ANALYZER

function analyzeResult(name, department, marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    let pass = marks.every(mark => mark >= 35);

    let grade;

    if (!pass) {
        grade = "Fail";
    } else if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("===== STUDENT RESULT =====");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total:", total);
    console.log("Average:", average.toFixed(2));
    console.log("Result:", pass ? "Pass" : "Fail");
    console.log("Grade:", grade);
}

analyzeResult("Arun", "Computer Science", [85, 90, 78, 88, 92]);


// TASK 2 — EMPLOYEE SALARY CALCULATOR

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("===== EMPLOYEE SALARY =====");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);

    return finalSalary;
}

calculateSalary(employee);


// TASK 3 — PRODUCT FILTER SYSTEM


let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let expensiveProducts = products.filter(product => product.price > 2000);

let electronics = products.filter(
    product => product.category === "electronics"
);

let firstBelow1000 = products.find(
    product => product.price < 1000
);

let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

let productAbove50000 = products.some(
    product => product.price > 50000
);

let allAbove500 = products.every(
    product => product.price > 500
);

console.log("===== PRODUCT FILTER SYSTEM =====");
console.log("Products above ₹2,000:", expensiveProducts);
console.log("Electronics:", electronics);
console.log("First product below ₹1,000:", firstBelow1000);
console.log("Total price:", totalProductPrice);
console.log("Any product above ₹50,000:", productAbove50000);
console.log("Every product above ₹500:", allAbove500);


// TASK 4 — EMPLOYEE MANAGEMENT

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 55000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Software Engineer",
        salary: 48000
    },
    {
        id: 105,
        name: "Rahul",
        role: "Team Lead",
        salary: 70000
    },
    {
        id: 106,
        name: "Meena",
        role: "Tester",
        salary: 42000
    }
];

let employeeNames = employees.map(employee => employee.name);

let employeesAbove40000 = employees.filter(
    employee => employee.salary > 40000
);

let employee103 = employees.find(
    employee => employee.id === 103
);

let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

let highestPaidEmployee = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

let onlyNames = employees.map(
    employee => employee.name
);

console.log("===== EMPLOYEE MANAGEMENT =====");
console.log("Employee Names:", employeeNames);
console.log("Employees earning above ₹40,000:", employeesAbove40000);
console.log("Employee with ID 103:", employee103);
console.log("Total Salary:", totalSalary);
console.log("Highest Paid Employee:", highestPaidEmployee);
console.log("Salary High to Low:", sortedEmployees);
console.log("Names Array:", onlyNames);


// TASK 5 — SHOPPING CART

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let itemTotals = cart.map(item => ({
        name: item.name,
        itemTotal: item.price * item.quantity
    }));

    let totalCartValue = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalPayableAmount = totalCartValue - discount;

    console.log("===== SHOPPING CART =====");
    console.log("Item Totals:", itemTotals);
    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalPayableAmount);
}

calculateCart(cart);


// ============================================================
// TASK 6 — STUDENT SEARCH SYSTEM
// ============================================================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let studentNames = students.map(student => student.name);

let studentsAbove80 = students.filter(
    student => student.mark > 80
);

let priya = students.find(
    student => student.name === "Priya"
);

let averageMark =
    students.reduce((total, student) => total + student.mark, 0)
    / students.length;

let anyoneFailed = students.some(
    student => student.mark < 35
);

let everyoneAbove40 = students.every(
    student => student.mark > 40
);

let studentsSortedByMarks = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("===== STUDENT SEARCH SYSTEM =====");
console.log("Student Names:", studentNames);
console.log("Students above 80:", studentsAbove80);
console.log("Priya:", priya);
console.log("Average Mark:", averageMark.toFixed(2));
console.log("Anyone Failed:", anyoneFailed);
console.log("Everyone scored above 40:", everyoneAbove40);
console.log("Students sorted by marks:", studentsSortedByMarks);


// TASK 7 — ARRAY TRANSFORMATION CHALLENGE

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers = numbers.map(
    number => number * 2
);

let evenNumbers = numbers.filter(
    number => number % 2 === 0
);

let greaterThan15 = numbers.filter(
    number => number > 15
);

let firstGreaterThan20 = numbers.find(
    number => number > 20
);

let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);

let anyGreaterThan40 = numbers.some(
    number => number > 40
);

let everyNumberPositive = numbers.every(
    number => number > 0
);

let numbersHighToLow = [...numbers].sort(
    (a, b) => b - a
);

console.log("===== ARRAY TRANSFORMATION =====");
console.log("Doubled Numbers:", doubledNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Numbers greater than 15:", greaterThan15);
console.log("First number greater than 20:", firstGreaterThan20);
console.log("Total:", totalNumbers);
console.log("Any number greater than 40:", anyGreaterThan40);
console.log("Every number positive:", everyNumberPositive);
console.log("High to Low:", numbersHighToLow);


// TASK 8 — STRING ANALYZER

let sentence = "JavaScript is very powerful";

let totalCharacters = sentence.length;

let uppercaseSentence = sentence.toUpperCase();

let lowercaseSentence = sentence.toLowerCase();

let containsJavaScript = sentence.includes("JavaScript");

let firstCharacter = sentence.slice(0, 1);

let lastCharacter = sentence.slice(-1);

let words = sentence.split(" ");

let numberOfWords = words.length;

let replacedSentence = sentence.replace(
    "JavaScript",
    "Python"
);

let sentenceArray = sentence.split(" ");

console.log("===== STRING ANALYZER =====");
console.log("Sentence:", sentence);
console.log("Total Characters:", totalCharacters);
console.log("Uppercase:", uppercaseSentence);
console.log("Lowercase:", lowercaseSentence);
console.log("Contains JavaScript:", containsJavaScript);
console.log("First Character:", firstCharacter);
console.log("Last Character:", lastCharacter);
console.log("Number of Words:", numberOfWords);
console.log("Replace JavaScript:", replacedSentence);
console.log("Sentence Array:", sentenceArray);


// FINAL MINI PROJECT — EMPLOYEE DASHBOARD

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("===== EMPLOYEE DASHBOARD =====");

console.log("1. EMPLOYEE LIST");

dashboardEmployees.forEach(employee => {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );
});


// 2. Search Employee by Name

function searchEmployeeByName(name) {

    let result = dashboardEmployees.find(
        employee =>
            employee.name.toLowerCase() === name.toLowerCase()
    );

    console.log("2. SEARCH RESULT:", result);
}

searchEmployeeByName("Arun");


// 3. Department Filter

let itEmployees = dashboardEmployees.filter(
    employee => employee.department === "IT"
);

console.log("3. IT EMPLOYEES:", itEmployees);


// 4. Salary Filter

let highSalaryEmployees = dashboardEmployees.filter(
    employee => employee.salary > 50000
);

console.log(
    "4. Employees earning above ₹50,000:",
    highSalaryEmployees
);


// 5. Salary Calculation

let companyTotalSalary = dashboardEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log(
    "5. Total Company Salary: ₹" + companyTotalSalary
);


// 6. Highest Salary

let highestSalaryEmployee = dashboardEmployees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log(
    "6. Highest Paid Employee:",
    highestSalaryEmployee
);


// 7. Experience

let experiencedEmployees = dashboardEmployees.filter(
    employee => employee.experience > 3
);

console.log(
    "7. Employees with more than 3 years experience:",
    experiencedEmployees
);


// 8. Sorting

let lowToHigh = [...dashboardEmployees].sort(
    (a, b) => a.salary - b.salary
);

let highToLow = [...dashboardEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("8. Salary Low to High:", lowToHigh);
console.log("Salary High to Low:", highToLow);


// 9. Statistics

let totalEmployees = dashboardEmployees.length;

let averageSalary =
    companyTotalSalary / totalEmployees;

console.log("9. STATISTICS");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + companyTotalSalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + averageSalary.toFixed(0));

