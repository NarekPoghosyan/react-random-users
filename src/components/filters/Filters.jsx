// libraries
import React from 'react'

// styles
import './Filters.scss'

const Filters = ({ selectGender, iGender, iAge, selectAge }) => {
    return (
        <div className="filters">
            <div className="filters_conteiner">
                <div className="filters_content">
                    <div className="filter_by_gender">
                        Фильтр по полу
                        <div>
                            <button onClick={e => selectGender(e, 0)} className={iGender === 0 ? 'active' : ''} name="gender" value={null}></button>
                            <span>Все</span>
                        </div>
                        <div>
                            <button onClick={e => selectGender(e, 1)} className={iGender === 1 ? 'active' : ''} name="gender" value="male"></button>
                            <span>Только мужчины</span>
                        </div>
                        <div>
                            <button onClick={e => selectGender(e, 2)} className={iGender === 2 ? 'active' : ''} name="gender" value="female"></button>
                            <span>Только женщины</span>
                        </div>
                    </div>
                    <div className="filter_by_age">
                        <div className="filter_title">Фильтр по возрастным группам</div>
                        <div className="by_age_buttons">
                            <div>
                                <button onClick={e => selectAge(0, 0, 18)} className={iAge === 0 ? 'active' : ''}></button>
                                <span>0-18</span>
                            </div>
                            <div>
                                <button onClick={e => selectAge(1, 18, 35)} className={iAge === 1 ? 'active' : ''}></button>
                                <span>18-35</span>
                            </div>
                        </div>
                        <div className="by_age_buttons">
                            <div>
                                <button onClick={e => selectAge(2, 35, 65)} className={iAge === 2 ? 'active' : ''}></button>
                                <span>35-65</span>
                            </div>
                            <div>
                                <button onClick={e => selectAge(3, 65, Infinity)} className={iAge === 3 ? 'active' : ''}></button>
                                <span>65+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;