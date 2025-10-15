import './styles.scss';

export default function Footer() {
    return (
        <footer>
            <div className="text-top-wrapper">
                <p>sporthub</p>
                <h2>О проекте</h2>
                <h2>Обратная связь</h2>
                <div>
                    <h2>Реклама:</h2>
                    <p>ads@sporthub.news</p>
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

            <div className="text-bottom-wrapper">
                <p>© 2022 «Спортхаб»</p>
                <div>
                    <img src="Group.svg" className="svg" />
                    <p>Разработка сайта — компания PRAS</p>
                </div>
            </div>
        </footer>
    );
}
