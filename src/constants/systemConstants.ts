export const ACCESS_JWT_LIFETIME = "15m"; // -> JWT library likes it in this format
export const ACCESS_JWT_LIFETIME_MS = "1000 * 60 * 15"

export const REFRESH_JWT_LIFETIME = "7d"; // -> JWT library likes it in this format
export const REFRESH_JWT_LIFETIME_MS = "1000 * 60 * 60 * 24 * 7";

export const ACCT_VERIFICATION_JWT_LIFETIME = "7d";

export const REFRESH_TOKEN_COOKIE_KEY = "wrt";
export const AUTH_HEADER_KEY = "authorization";

export const REFRESH_TOKEN_ROUTE = "/refresh-token";
export const USER_DURING_TOKEN_REFRESH_ROUTE = "/token-refresh-get-user"

export const FE_RESET_PASSWORD_ROUTE = "/reset-password";
export const FE_ACCOUNT_VERIFICATION_ROUTE = "/account-verification";
export const FE_REGISTRATION_ROUTE = "/registration";

export const APP_NAME = "WaveMap Backend";

export const NUM_BYTES_TOTP_SECRET = 32;
export const NUMBER_OF_PASSWORD_SALTING_ROUNDS = 12;

export const REGISTRATION_CODE_LENGTH = 20;
export const PASSWORD_RESET_TOKEN_LENGTH = 20;
export const PASSWORD_RESET_EXPIRY_TIME_MS = 1000 * 60 * 60 * 24 * 3; // -> Three days
