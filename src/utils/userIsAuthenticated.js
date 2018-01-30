import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

/**
 * Protects router routes
 */
export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: s => { console.log('selector', s); return Boolean(s.firebase.auth.uid) },
  wrapperDisplayName: 'UserIsAuthenticated'
});

