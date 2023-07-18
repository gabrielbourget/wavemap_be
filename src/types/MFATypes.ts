export type MFAType = "Email" | "SMS" | "None";

export type BackendMFAType = "none" | "sms_twilio" | "email";

export type MFAScenario = "Confirmation" | "Login Code Entry"
