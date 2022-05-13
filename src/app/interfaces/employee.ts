export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    address: {
        id: string;
        street: string;
        city: string;
        region: string;
        postal: string;
    }
    companyEmail: string;
    birthDate: string;
    hiredDate: string;
    role: string;
    skills: Skill[];
}

interface Skill {
    id: string;
    field: {
        id: string;
        name: string;
        type: string;
    },
    experience: number;
}