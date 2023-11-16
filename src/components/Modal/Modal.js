import {Link ,Route, Routes} from 'react-router-dom'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'
import {ReactComponent as XMarkIcon} from '../../icons/xmark-solid.svg'

function Modal({active, setActive}){
    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modalContent} ${active && s.active}`}>
                <button onClick={()=>setActive(false)}>X</button>
                <XMarkIcon onClick={() => setActive('false')}/>
                <Routes>
                    <Route path='/login' element={<FormElem title='Авторизация' 
                                                            button={{submit: 'Auth', redirect: 'Reg'}}
                                                            link={'/registration'}
                                                            type={'login'}
                                                            input={{email:'Почта', password:'Пароль'}}
                                                            infoText='Введите логин и пароль вашего аккаунта.'
                                                            />}/>
                    <Route path='/registration' element={<FormElem title='Регистрация' 
                                                            button={{submit: 'Reg', redirect: 'Auth'}}
                                                            link={'/login'}
                                                            type={'reg'}
                                                            input={{email:'Почта', password:'Пароль', secondPassword:"Повторите пароль"}}
                                                            infoText='Регистрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности.'
                                                            />}/>
                    <Route path='/reset' element={<FormElem title='Сброс пароля' 
                                                            button={{submit: 'Reset passwrd', redirect: 'Auth'}}
                                                            link={'/login'}
                                                            type={'reset'}
                                                            input={{email: "Почта"}}
                                                            infoText='Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля действует 24 часа.'
                    />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Modal