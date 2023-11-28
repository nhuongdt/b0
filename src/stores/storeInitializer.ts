import TenantStore from './tenantStore';
import SessionStore from './sessionStore';
import AuthenticationStore from './authenticationStore';
import AccountStore from './accountStore';
import roleStore from './roleStore';
import userStore from './userStore';
export default function initializeStores() {
    return {
        authenticationStore: AuthenticationStore,
        roleStore: roleStore,
        tenantStore: new TenantStore(),
        userStore: userStore,
        sessionStore: SessionStore,
        accountStore: new AccountStore()
    };
}
