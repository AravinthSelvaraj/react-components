import './style.css';
import IFloatLabelField from './modal';
import FloatLabelFieldUtils from './utils';

const FloatLabelField = ( props: IFloatLabelField ) => {
    const { id, label } = props;
    let { type } = props;
    if ( !type ) {
        type = 'text';
    }
    const { handleFocus, handleBlur } = FloatLabelFieldUtils;
    return (
        <fieldset className='float-label-field'>
            <label htmlFor={ id }>{ label }</label>
            <input type={ type } id={ id } name={ id } onFocus={ handleFocus } onBlur={ handleBlur } />
        </fieldset>
    );
}

export default FloatLabelField;