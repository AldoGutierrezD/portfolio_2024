export interface Project {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    url: string;
    skills: Array<string>;
}

export interface Experience {
    icon: string;
    title: string;
    subtitle: string;
    date: string;
    active: boolean;
}

export interface Skill {
    title: string;
    skills: Array<string>;
}
