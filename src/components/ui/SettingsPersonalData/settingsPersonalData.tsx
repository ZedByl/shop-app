import React, { FC, useState } from 'react'
import pen from '../../../assets/pen.svg'
import TextField from '../../common/TextField/textField'

interface PropsPersonData {
    onChange: any,
    data: DataAccount,
    onSubmit: any,
    isValid: boolean,
    errors: DataAccount
}

interface DataAccount {
    name: string,
    email: string,
    phone: string,
    dateOfBirth: string
}

const SettingsPersonalData: FC<PropsPersonData> = ({
                                                       data, onChange, errors, onSubmit, isValid,
                                                   }) => {
    const [active, setActive] = useState(false)
    const toggleActiveLK = () => {
        setActive((prevState) => !prevState)
    }
    return (
        <div className="account-settings__card">
            <div className="account-settings__card__inner">
                <div className="account-settings__card__header">
                    <div className="account-settings__card__title">
                        { active ? 'Изменение личных данных' : 'Личные данные' }</div>
                    <div
                      className="account-settings__card__button"
                      onClick={ toggleActiveLK }
                    >
                        <img
                          src={ pen }
                          alt="pen"
                          className="account-settings__card__button-icon"
                        />
                        Изменить
                    </div>
                </div>
                <div
                  className={ `account-settings__card__body${active ? ' account-settings__card__body_active' : ''}` }
                >
                    <div className="account-settings__card__body-item">
                        <div className="account-settings__card__body-name">Имя*</div>
                        <div className="account-settings__card__body-content">{ data.name }</div>
                    </div>
                    <div className="account-settings__card__body-item">
                        <div className="account-settings__card__body-name">Номер телефона*</div>
                        <div className="account-settings__card__body-content">{ data.phone }</div>
                    </div>
                    <div className="account-settings__card__body-item">
                        <div className="account-settings__card__body-name">Почта*</div>
                        <div className="account-settings__card__body-content">{ data.email }</div>
                    </div>
                    { data.dateOfBirth && (
                        <div className="account-settings__card__body-item">
                            <div className="account-settings__card__body-name">Дата рождения</div>
                            <div className="account-settings__card__body-content">{ data.dateOfBirth }</div>
                        </div>
                    ) }
                </div>
                <div
                  className={ `account-settings__card__hidden${active ? ' account-settings__card__hidden_active' : ''}` }
                >
                    <div className="account-settings__card__hidden__inner">
                        <div className="account-settings__card__hidden-input">
                            <TextField
                              label="Имя*"
                              name="name"
                              value={ data.name }
                              error={ errors.name }
                              onChange={ onChange }
                            />
                        </div>
                        <div className="account-settings__card__hidden-input">
                            <TextField
                              label="Номер телефона*"
                              name="phone"
                              value={ data.phone }
                              error={ errors.phone }
                              onChange={ onChange }
                              mask="+7 999 999-99-99"
                              type="tel"
                              autoComplete="tel"
                              placeholder="+7 999 999-99-99"
                            />
                        </div>
                        <div className="account-settings__card__hidden-input">
                            <TextField
                              label="Почта"
                              name="email"
                              value={ data.email }
                              error={ errors.email }
                              onChange={ onChange }
                            />
                        </div>
                        <div className="account-settings__card__hidden-input">
                            <TextField
                              label="Дата рождения"
                              name="dateOfBirth"
                              value={ data.dateOfBirth }
                              error={ errors.dateOfBirth }
                              onChange={ onChange }
                            />
                        </div>
                    </div>
                    <div
                      className={ `account-settings__card__hidden-button${isValid ? '' : ' disable'}` }
                      onClick={ onSubmit }
                    >
                        Сохранить изменения
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPersonalData
