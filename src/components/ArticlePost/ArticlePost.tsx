import './styles.scss';

export default function ArticlePost(props: { id: number }) {
    return (
        <article className="post">
            <img
                src={
                    props.id === 1
                        ? 'image.png'
                        : props.id === 2
                        ? 'image (1).png'
                        : '07908cb9c1b96866de4c431afc22f89baead3016.png'
                }
            ></img>
            <div className="text-container">
                <h2>
                    Сегодня |
                    <span>
                        {props.id === 1
                            ? '#болельщикам'
                            : props.id === 2
                            ? '#любительский_спорт'
                            : '#Профессиональный_спорт'}
                    </span>
                </h2>
                <h1>
                    Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему
                    так?
                </h1>
                <p>
                    И если для «горняков», которые неделей ранее разгромно уступили в Турине
                    тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от
                    «жёлто-синих»...
                </p>
            </div>
        </article>
    );
}
