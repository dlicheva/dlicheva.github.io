async function fetchData() {
    const res = await fetch("/data.json", {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    });
    return await res.json()
}
export default fetchData
