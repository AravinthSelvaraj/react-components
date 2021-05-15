import './style.css';
import CreateFormUtils from './utils';

import MaterialForm from '../../utils/material-design/forms/material-form/component';

const CreateForm = () => {
    const elements = CreateFormUtils.createFormElements();
    return (
        <MaterialForm
            id="createForm"
            label="Create Form"
            elements={ elements }
            handleSubmit={ CreateFormUtils.handleFormSubmit } />
    );
}

export default CreateForm;