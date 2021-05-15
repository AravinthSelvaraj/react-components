import './style.css';
import IMaterialForm from './modal';

import FormElement from '../form-elements/component';

function MaterialForm ( props: IMaterialForm ) {
    const { id, label, elements, handleSubmit } = props;
    return (
        <div className='modern-form' id={ id }>
            <h3>{ label }</h3>
            <form onSubmit={ handleSubmit }>
                { elements.map ( ( elem, idx ) => {
                    return <FormElement key={ idx } elem={ elem } />
                })}
            </form>
        </div>
    );
}

export default MaterialForm;