import './App.scss';
import { useEffect, useState } from 'react';
import ArticleForSlider from './components/ArticleForSlider/ArticleForSlider';
import ArticlePost from './components/ArticlePost/ArticlePost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    return (
        <>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Header setOpen={setOpen} />
            <main>
                <h2 className="last">Последнее</h2>
                <section className="news-wrapper">
                    <ArticlePost id={1} />
                    <ArticlePost id={2} />
                    <ArticlePost id={3} />
                    <ArticlePost id={1} />
                    <div className="slider-wrapper">
                        <div className="slider">
                            <ArticleForSlider id={1} />
                            <ArticleForSlider id={2} />
                            <ArticleForSlider id={3} />
                            <ArticleForSlider id={1} />
                        </div>
                    </div>
                    <ArticlePost id={2} />
                    <ArticlePost id={3} />
                </section>
                <section className="after-news-wrapper">
                    <aside className="after-news">
                        <div>
                            <p>#болельщикам</p>
                            <h1>Юрий Поклад: «Динамо» как бы начинает работать заново</h1>
                        </div>
                    </aside>
                    <aside className="subscribe-social-wrapper">
                        <div>
                            <h2>Соцсети</h2>
                            <div className="social-wrapper">
                                <img src="vk.svg" className="svg" />
                                <img src="facebook.svg" className="svg" />
                                <img src="instagram.svg" className="svg" />
                                <img src="youtube 1.svg" className="svg" />
                                <img src="telegram.svg" className="svg" />
                                <img src="tiktok.svg" className="svg" />
                                <img src="twitter.svg" className="svg" />
                            </div>
                        </div>

                        <div>
                            <h2>Подписка</h2>
                            <div className="subscribe-wrapper">
                                <input placeholder="Введите ваш email" type="email" />
                                <button>Подписаться</button>
                            </div>
                        </div>
                    </aside>
                    <aside className="after-news">
                        <div>
                            <h1>Экстрим</h1>
                            <p>
                                Интервью с Юрием Покладом. Полный список всех медалей Беларуси на
                                Европейских играх.
                            </p>
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
