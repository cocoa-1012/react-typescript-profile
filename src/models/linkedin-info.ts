import { ContactInfo } from "./contact-info";
import { ParsedResume } from "./parsed-resume";

export interface LinkedInInfo {
  id: string;
  name: string;
  url: string;
  image: string;
  position: string;
  address: string;
  pdfUrl: string;
  contactInfo: ContactInfo;
  parsedResume?: ParsedResume;
}
