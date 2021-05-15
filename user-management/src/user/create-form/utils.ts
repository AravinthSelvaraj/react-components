import IFormElement from '../../utils/material-design/forms/form-elements/modal';
import IFloatLabelField from '../../utils/material-design/forms/form-elements/float-label-field/modal';

class CreateFormUtils {
    static createFormElements = (): IFormElement[] => {
        return [
            {
                id: 'uName',
                label: 'User name',
                elemType: 'FloatLabelField'
            },
            {
                id: 'pwd',
                label: 'Password',
                type: 'password',
                elemType: 'FloatLabelField'
            } as IFloatLabelField,
            {
                id: 'confirmPwd',
                label: 'Confirm Password',
                type: 'password',
                elemType: 'FloatLabelField'
            },
            {
                id: 'createBtn',
                label: 'Create',
                elemType: 'RippleButton'
            }
        ];
    }

    static handleFormSubmit = ( event: React.SyntheticEvent ): void => {
        event.preventDefault();
        const btnElem = event.target as Element;
        const formElem = btnElem.closest( 'form' );
        if ( !formElem ) {
            throw Error('Unable to find closest form');
        }
        const uNameElem = formElem.querySelector( '#uName' ) as HTMLInputElement;
        console.log( 'uNameElem.value -> ', uNameElem.value )
        const pwdElem = formElem?.querySelector( '#pwd' ) as HTMLInputElement;
        console.log( 'pwdElem.value -> ' , pwdElem.value );
    }
}

export default CreateFormUtils;