import './style.css';

import IFormElement from '../modal';

const RippleButton = ( props : IFormElement ) => {
    const { id, label } = props;
    return (
        <input type='submit' className='btn-primary ripple' id={ id } name={ id } value={ label } />
    );
}

export default RippleButton;