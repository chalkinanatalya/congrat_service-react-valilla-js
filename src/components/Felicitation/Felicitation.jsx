import style from './Felicitation.module.css';
import { useContext } from 'react';
import { textContext } from '../../context/textContext';


const Felicitation = () => {
    const {text} = useContext(textContext);

    return (
        <p className={style.felicitation}>
            {text}
        </p>
    );
};

export default Felicitation;