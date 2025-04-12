type Employee = {
    name: string;
    role: string;
};

type Manager = {
    department: string;
    employees: number;
};

type TeamLead = Employee & Manager;


const teamLead: TeamLead = {
    name: "Alice",
    role: "Team Lead",
    department: "Engineering",
    employees: 10
};

console.log(`Team Lead: ${teamLead.name}, Role: ${teamLead.role}`);
