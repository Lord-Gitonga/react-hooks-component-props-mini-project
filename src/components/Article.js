function Article({title, date, preview, minutes}) {
    let emojis = '';
    if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5);
        emojis = '☕️'.repeat(coffeeCups);
    } else {
        const bentoBoxes = Math.ceil(minutes / 10);
        emojis = '🍱'.repeat(bentoBoxes);
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <div>{emojis} {minutes} min read</div>
        </article>
    )
}

export default Article;