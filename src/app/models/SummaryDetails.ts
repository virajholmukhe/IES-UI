import { BankDetails } from "./BankDetails";
import { EducationDetails } from "./EducationDetails";
import { FamilyDetails } from "./FamilyDetails";
import { IncomeDetails } from "./IncomeDetails";

export interface SummaryDetails {
    caseNumber: string;
    planName: string;
    incomeDetails: IncomeDetails;
    educationDetails: EducationDetails;
    familyDetails: FamilyDetails;
    bankDetails: BankDetails;
}