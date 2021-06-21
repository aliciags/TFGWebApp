/**
 * Payload Object to be signed and verified by JWT. Used by the auth middleware to pass data to the request by token signing (jwt.sign) and token verification (jwt.verify).
 */
export type Payload = {
    /** id of the user */
    userId: string,
    /** role of the user,
     * either admin or user
     */
    role: string
};

// export { Payload };
