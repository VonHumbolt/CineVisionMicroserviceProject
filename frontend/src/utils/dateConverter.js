const dateConvert = (date) => {
    return new Date(date).toLocaleDateString("tr", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default dateConvert;