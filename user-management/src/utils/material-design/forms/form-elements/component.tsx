import IFormElement from './modal';

import FloatLabelField from './float-label-field/component';
import RippleButton from './ripple-button/component';
import IFloatLabelField from './float-label-field/modal';

const FormElement = ( props: { elem: IFormElement } ) => {
    const { id, label, elemType } = props.elem;
    if ( elemType === 'FloatLabelField' ) {
        const elem = props.elem as IFloatLabelField;
        return <FloatLabelField id={ id } label={ label } type={ elem.type } />
    }
    if ( elemType === 'RippleButton' ) {
        return <RippleButton id={ id } label={ label } />
    }
    return <span>Given element type is invalid</span>
}

export default FormElement;