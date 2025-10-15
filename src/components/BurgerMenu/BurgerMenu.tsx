import './styles.scss';

interface IProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu({ open, setOpen }: IProps) {
    return (
        <div className={`menu-background ${open ? 'open' : 'close'}`}>
            <aside className="menu">
                <div className="info">
                    <p>sporthub</p>
                    <button className="btn" onClick={() => setOpen(false)}>
                        <img src="Frame 12.svg" className="svg" />
                    </button>
                </div>
                <div className="menu-list">
                    <nav className="first-nav-container">
                        <a href="#">Review</a>
                        <a href="#">Экстрим</a>
                        <a href="#">Легенды</a>
                        <a href="#">ЗОЖ и туризм</a>
                        <a href="#">Позiрк</a>
                        <a href="#">Треш</a>
                    </nav>
                    <nav className="second-nav-container">
                        <a href="#">Футбол</a>
                        <a href="#">Хоккей</a>
                        <a href="#">Биатлон</a>
                        <a href="#">Теннис</a>
                        <a href="#">Баскетбол</a>
                        <a href="#">Бокс</a>
                        <a href="#">Легкая атлетика</a>
                        <a href="#">Другое</a>
                    </nav>

                    <div className="text-wrapper">
                        <h2>О проекте</h2>
                        <h2>Обратная связь</h2>
                    </div>
                </div>
                <div className="social-wrapper">
                    <img src="vk (1).svg" className="svg" />
                    <img src="facebook (1).svg" className="svg" />
                    <img src="instagram (1).svg" className="svg" />
                    <img src="youtube 1 (1).svg" className="svg" />
                    <img src="telegram (1).svg" className="svg" />
                    <img src="tiktok (1).svg" className="svg" />
                    <img src="twitter (1).svg" className="svg" />
                </div>

                <div className="subscribe-wrapper">
                    <div>
                        <h2>Размещение рекламы:</h2>
                        <p>ads@sporthub.news</p>
                    </div>
                    <div>
                        <h2>Подписка:</h2>
                        <div className="subscribe">
                            <input placeholder="Введите ваш email" type="email" />
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
