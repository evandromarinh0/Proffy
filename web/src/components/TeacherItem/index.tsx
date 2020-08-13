import React from 'react'
import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    teacher: Teacher;
}
export interface Teacher {
    id: number,
    name: string,
    avatar: string,
    bio: string,
    cost: number,
    subject: string,
    whatsapp: string,
};

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    
    function addNewConnection(){
        api.post('connections', {
            user_id: teacher.id 
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={addNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Contato"/>
                    Entrar em Contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem