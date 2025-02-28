export interface EligibilityDetails {
    id: number;
    planName: string;
    planStatus: string;
    planStartDate: string;
    planEndDate: string;
    benefitAmount: number;
    deniedReason: string;
    caseNumber: string;
}