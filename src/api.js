export async function getTracks() {
    try {
        const response = await fetch('https://painassasin.online/catalog/track/all/');
        const data = await response.json();

        return data;
    } catch {
        throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    }
 }