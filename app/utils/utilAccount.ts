export function isLogged() {
    const accountStore = useAccountStore()

    return accountStore.isLogged
}

export function navigateToLogin() {
    navigateTo('accounts/login')
}