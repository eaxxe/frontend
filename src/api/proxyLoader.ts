export interface ProxyLoaderConfig {
    baseUrl: string
    files: string[]
}

let loaded = false
let loadingPromise:  Promise<void> | null = null

function loadScript(src: string): Promise<void> {
    return new Promise((resolve,reject) => {
        const script = document.createElement('script')

        script.src = src
        script.onload = () => {
            resolve()
        }
        
        script.onerror = () =>{
            reject(new Error(`Failed to load ${src}`))
        }


        document.head.appendChild(script);

    })
}

export async function ensureProxyLoaded(config: ProxyLoaderConfig): Promise<void> {
    if(loaded) return
    if(loadingPromise) return loadingPromise 

    loadingPromise = (async () => {
        for(const file of config.files){
            const fullUrl = `${config.baseUrl}/${file}`
            await loadScript(fullUrl)
        }
        loaded  = true

    })()
    return loadingPromise

}