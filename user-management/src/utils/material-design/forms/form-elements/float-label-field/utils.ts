class FloatLabelFieldUtils {
    static handleFocus = ( event: React.FocusEvent<HTMLInputElement> ) => {
        const elem = event.target as Element;
        const fieldsetElem = elem.closest( 'fieldset' );
        if( !fieldsetElem ) {
            throw Error( 'Unable to find closest field set element' );
        }
        fieldsetElem.classList.add( 'float' );
        fieldsetElem.classList.add( 'focus' );
    }

    static handleBlur = ( event: React.FocusEvent<HTMLInputElement> ) => {
        const elem = event.target as HTMLInputElement;
        const fieldsetElem = elem.closest( 'fieldset' );
        if( !fieldsetElem ) {
            throw Error( 'Unable to find closest field set element' );
        }
        fieldsetElem.classList.remove( 'focus' );
        if ( !elem.value ) {
            fieldsetElem?.classList.remove( 'float' );
        }
    }
}

export default FloatLabelFieldUtils;