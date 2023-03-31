import React, {useContext, useState} from 'react';
import './Description.scss';
import './../../../UI/assets/scss/Modale.scss';
import Button from "@mui/material/Button";
import ChapterSelection from "../ChapterSection/ChapterSection";
import {ThemeContext} from "../../../Store/db/Theme";

const DescriptionManga = ({acrive, setActive}) => {

    const [ModalActive, setModalActive] = useState(false);
    const useStyle = useContext(ThemeContext);

    return (
        <>
            <div className={acrive ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={acrive ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}
                     style={useStyle.component}>
                    <div className="PageFlex">
                        <h2>Человек бензопила</h2>
                        <div className="DescriptionContent">
                            <img className="DescriptionImg" src={require("./../../../UI/assets/img/chainsawman/1.jpg")}
                                 alt=""/>
                            <p>
                                «Я всегда мечтал жить обычной жизнью: спать в тёплой постели, есть тосты с джемом по
                                утрам,
                                ходить
                                на свидания со своей девушкой и улыбаться каждый день. Но всё изменилось со смертью отца
                                —
                                теперь,
                                Потита, пора убивать!» — с такими словами Дэндзи вместе со своим псом-бензопилой Потитой
                                отправляется на очередной контракт, ведь они — охотники на демонов. Каждый день они
                                убивают
                                ради
                                денег, которые Дэндзи должен отдать одному якудза, иначе долг покойного отца придётся
                                отдать
                                собственной жизнью. Но что ждёт Дэндзи, когда он вернёт весь долг: заживёт обычной
                                жизнью
                                или
                                продолжит спасать мир от демонов? А может, у судьбы свои планы на участь героя?
                            </p>
                        </div>
                        <br/>
                        <p>Жанры: Боевик,
                            Комедия,
                            Романтика,
                            Сверхъестественное,
                            Сёнэн,
                            Трагедия,
                            Ужасы,
                            Фэнтези,
                            Зомби,
                            Антигерой,
                            Монстры,
                            ГГ мужчина,
                            Дружба,
                            Жестокий мир,
                            Насилие / жестокость,
                            Огнестрельное оружие,
                            Скрытие личности</p>
                        <br/>
                        <p>Количество глав: 108 глав</p>
                        <br/>
                        <p>Переводчики: Japit Comics и Nippa Team</p>
                        <br/>
                        <p>Статус: завершено</p>

                        <Button onClick={() => setModalActive(true)} style={{background: '#2196F3', color: '#fff'}}>
                            Читать
                        </Button>
                    </div>
                </div>
            </div>
            <ChapterSelection acrive={ModalActive} setActive={setModalActive}/>
        </>
    );
};

export default DescriptionManga;