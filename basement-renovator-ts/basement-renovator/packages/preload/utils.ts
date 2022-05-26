/** Document ready */
export const domReady = (condition: DocumentReadyState[] = ['complete', 'interactive']) => {
    return new Promise<true>((resolve) => {
        if (condition.includes(document.readyState)) {
            resolve(true);
        }
        else {
            document.addEventListener('readystatechange', () => {
                if (condition.includes(document.readyState)) {
                    resolve(true);
                }
            })
        }
    })
}