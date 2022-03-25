export default {

    oidc: {
        clientId: '0oa4c8dn9p65fmC7O5d7',
        issuer: 'https://dev-5165573.okta.com/oauth2/default',
        redirectUri: 'https://my-ecommerce-app.azurewebsites.net/login/callback',
        //redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
