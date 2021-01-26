import { ContactInfo } from "./contact-info";

export interface ProfileInfo {
  id: string;
  name: string;
  url: string;
  image: string;
  contactInfo: ContactInfo;
  position: string;
}
