export async function getTracks() {
    const response = await fetch('https://painassasin.online/catalog/track/all/')
    .catch((error) =>
        {throw new Error("Не удалось загрузить плейлист, попробуйте позже")}
    );

    const data = await response.json();
    return data;
 }