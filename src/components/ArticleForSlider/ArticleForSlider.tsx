import './styles.scss';

export default function ArticleForSlider(props: { id: number }) {
    return (
        <article className="slider-card">
            <img src="icon-quote.svg" className="svg" />
            <img
                className="avatar"
                src={
                    props.id === 1
                        ? 'f65b3d393074271dc44996a5acab1b4b8aadf6c9.png'
                        : props.id === 2
                        ? 'd4605ea10035df55cf30aee575275e7e6fee2088.png'
                        : '69578bf31b0d76947c05c3281b8dd6aec32f542c.png'
                }
                alt="фотография человека"
            ></img>
            <h1>Алексей Михайличенко</h1>
            <h2>Главный тренер ф.к. Динамо</h2>
            <p>Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
        </article>
    );
}
