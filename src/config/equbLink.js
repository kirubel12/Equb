export const generateLink = () => {
    const length = 8;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}
