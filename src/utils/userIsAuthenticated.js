import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

/**
 * Protects router routes
 */
export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: s => {
    const result = Boolean(s.firebase.auth.uid);
    console.log('USER_IS_AUTHENTICATED', result);
    return result;
  },
  wrapperDisplayName: 'UserIsAuthenticated',
});
