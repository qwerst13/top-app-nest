export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Goods
}

export class TopPageModel {
    firstLevelCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string;
    hh?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tags: string[];
    tagsTitle: string;
}
