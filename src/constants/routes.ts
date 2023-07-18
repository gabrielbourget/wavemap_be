// -> Auth
export const REFRESH_TOKEN_ROUTE = "/refresh-token";
export const USER_DURING_TOKEN_REFRESH_ROUTE = "/token-refresh-get-user"

export const FE_RESET_PASSWORD_ROUTE = "/reset-password";
export const FE_ACCOUNT_VERIFICATION_ROUTE = "/account-verification";
export const FE_REGISTRATION_ROUTE = "/registration";

export const BASE_URL = "/";

// -> Artists
export const ARTIST = "/artist";
export const ARTISTS = "/artists";

// -> Events
export const EVENT = "/event";
export const EVENTS = "/events";

// -> Event Series
export const EVENT_SERIES = "/event-series";
export const MANY_EVENT_SERIES = "/many-event-series";

// -> Venues
export const VENUE = "/venue";
export const VENUES = "/venues";

// -> Users
export const USER = "/user";
export const USERS = "/users";

// -> Auth
export const AUTH_URL = "/auth"
export const LOGIN = `${AUTH_URL}/login`;
export const LOGOUT = `${AUTH_URL}/logout`;
export const REGISTRATION = `${AUTH_URL}/register`;
export const SEND_REGISTRATION_INVITATION = `${AUTH_URL}/send-reg-invite`;
export const REVOKE_REFRESH_TOKEN = `${AUTH_URL}/revoke-refresh-token`;
export const VALIDATE_ACCT_VERIFICATION = `${AUTH_URL}/validate-acct-verification`;
export const RESEND_ACCT_VERIFICATION = `${AUTH_URL}/resend-acct-verification`;
export const REQUEST_PASSWORD_RESET = `${AUTH_URL}/request-password-reset`;
export const RESET_PASSWORD = `${AUTH_URL}/reset-password`;
export const CHANGE_PASSWORD = `${AUTH_URL}/change-password`;
