import { TwitterHandle } from "./twitter-handle";
import { WebsiteInfo } from "./website-info";

export interface ContactInfo {
  birthDateOn: { month: number; day: number };
  emailAddress: string;
  ims: { id: string; provider: string }[];
  phoneNumbers: { number: string; type: string }[];
  twitterHandles: TwitterHandle[];
  primaryTwitterHandle: TwitterHandle;
  websites: WebsiteInfo[];
}
