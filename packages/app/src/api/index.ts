const api = {
    GET: async (url: any) => {
        try {
            let res;
            const response = await fetch(url)

            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                res = await response.json()
            }

            if (response.status === 200) {
                return res
            }

            if (response.status === 404) {
                console.log('status 404');
            }

        } catch (e) {
            console.log('e', e)
        }
    }
}

export default api;