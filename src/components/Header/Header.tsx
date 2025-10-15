import './styles.scss';

interface IProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setOpen }: IProps) {
    return (
        <header>
            <div className="nav-container">
                <p>
                    <span>sport</span>hub
                </p>
                <nav>
                    <a href="#">Review</a>
                    <a href="#">Экстрим</a>
                    <a href="#">Легенды</a>
                    <a href="#">ЗОЖ и туризм</a>
                    <a href="#">Позiрк</a>
                    <a href="#">Треш</a>
                    <button className="burger-btn" onClick={() => setOpen(true)}>
                        <span className="lines" aria-hidden="true" />
                    </button>
                </nav>
            </div>
            <div className="main-news-container">
                <p>#экстрим</p>
                <h1>Юрий Поклад: «Динамо» как бы начинает работать заново</h1>
            </div>
            <nav className="color-nav-container">
                <a href="#">Футбол</a>
                <a href="#">Хоккей</a>
                <a href="#">Биатлон</a>
                <a href="#">Теннис</a>
                <a href="#">Баскетбол</a>
                <a href="#">Бокс</a>
                <a href="#">Легкая атлетика</a>
                <a href="#">Другое</a>
            </nav>
        </header>
    );
}
