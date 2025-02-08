export async function identityResolveHandle(handle: string) {
    const atprotoAgent = useAtprotoAgent()

    return atprotoAgent
        .setService('public')
        .com.atproto.identity
        .resolveHandle({ handle })
        .then(result => result.data)
}