export function parseProfileDescription(description: string) {
    return nl2br(autolinker(description))
}

export function makeHandleShort(handle: string) {
    return handle.replace('.bsky.social', '')
}

export function makeHandleLonger(handle: string) {
    if (handle.startsWith('did:')) {
        return handle
    }

    if (handle.split('.').length <= 1) {
        return `${handle}.bsky.social`
    }

    return handle
}

export function routeProfile(profile: any) {
    return makeHandleShort(`/${profile.handle}`)
}

export function guardIsLogged(callback: Function, isLoginRequired: boolean = true) {
    const accountStore = useAccountStore()

    if (isLoginRequired && !accountStore.isLogged) {
        return navigateTo('/accounts/login')
    }

    if (typeof callback === 'function') {
        callback()
    }

    return true
}

export async function followProfile(profile: any) {
    const atprotoAgent = useAtprotoAgent()

    const response = await atprotoAgent
        .setService('private')
        .follow(profile.did)

    profile.viewer.following = response.uri

    return response
}

export async function unfollowProfile(profile: any) {
    const atprotoAgent = useAtprotoAgent()

    const response = await atprotoAgent
        .setService('private')
        .deleteFollow(profile.viewer.following)

    profile.viewer.following = response

    return response
}

export function canFollowProfile(profile: any) {
    return profile.viewer && !profile.viewer.following
}

export async function uploadAvatar(imageBuffer: any) {
    const atprotoAgent = useAtprotoAgent()

    const { data: uploadData } = await atprotoAgent
        .setService('private')
        .api.com.atproto.repo.uploadBlob(imageBuffer, {
            encoding: 'image/png'
        })

    return uploadData
}