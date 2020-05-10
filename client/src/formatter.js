export const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1) > 9 ? date.getMonth() : '0' + (date.getMonth() + 1);
    const dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    return `${dd}-${mm}-${yyyy}`;
}