export interface Employee {
    id: string | null;
    firstName: string;
    lastName: string;
    address: {
        id: string;
        street: string;
        city: string;
        region: string;
        postal: string;
        country: string;
    }
    companyEmail: string;
    birthDate: string;
    hiredDate: string;
    role: string;
    skills: Skill[];
}

export interface Skill {
    id: string;
    field: {
        id: string;
        name: string;
        type: string;
    },
    experience: number;
}