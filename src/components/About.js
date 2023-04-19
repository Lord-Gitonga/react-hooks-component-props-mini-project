function AboutMe({ data, src }) {
    
    return (
        <aside>
            <img src={src} alt="blog logo"></img>
            <p>{data}</p>
        </aside>
    );
}
export default AboutMe;