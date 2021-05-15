import IFormElement from '../form-elements/modal';

interface IMaterialForm {
    id: string;
    label: string;
    elements: Array<IFormElement>;
    handleSubmit: ( event: React.SyntheticEvent ) => void;
};

export default IMaterialForm;