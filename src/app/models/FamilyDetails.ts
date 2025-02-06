import { KidDetails } from "./KidDetails";

export interface FamilyDetails {
    id: number;
    caseNumber: string;
    kids: KidDetails[];
}