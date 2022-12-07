import * as React from 'react';
import {
  ArrayInput,
  CloneButton,
  CreateButton,
  DateInput,
  Edit,
  EditActionsProps,
  FileField,
  FileInput,
  FormDataConsumer,
  FormTab,
  minValue,
  NumberInput,
  required,
  SelectInput,
  ShowButton,
  SimpleFormIterator,
  TabbedForm,
  TextInput,
  TopToolbar,
  usePermissions,
} from 'react-admin';
import ArticleTitle from './ArticleTitle';

// const CreateCategory = ({
//     onAddChoice,
// }: {
//     onAddChoice: (record: any) => void;
// }) => {
//     const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//     const [value, setValue] = React.useState(filter || '');
//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         const choice = { name: value, id: value.toLowerCase() };
//         onAddChoice(choice);
//         onCreate(choice);
//         setValue('');
//         return false;
//     };
//     return (
//         <Dialog open onClose={onCancel}>
//             <form onSubmit={handleSubmit}>
//                 <DialogContent>
//                     <MuiTextField
//                         label="New Category"
//                         value={value}
//                         onChange={event => setValue(event.target.value)}
//                         autoFocus
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button type="submit">Save</Button>
//                     <Button onClick={onCancel}>Cancel</Button>
//                 </DialogActions>
//             </form>
//         </Dialog>
//     );
// };

const EditActions = ({ hasShow }: EditActionsProps) => (
    <TopToolbar>
        <CloneButton className="button-clone" />
        {hasShow && <ShowButton />}
        {/* FIXME: added because react-router HashHistory cannot block navigation induced by address bar changes */}
        <CreateButton />
    </TopToolbar>
);

const ArticleEdit = () => {
    const { permissions } = usePermissions();
    return (
        <Edit title={<ArticleTitle />} actions={<EditActions />}>
            <TabbedForm
                defaultValues={{ average_note: 0 }}
                warnWhenUnsavedChanges
            >
                <FormTab label="resources.articles.terms.goods">
                    <ArrayInput
                        source="goods"

                        validate={[required()]}
                    >
                        <SimpleFormIterator>
                            <TextInput source="name" defaultValue="" />
                            <NumberInput
                                source="weight"
                                validate={[
                                    minValue(0, 'Should be atleast 0'),
                                ]}
                            />
                            <NumberInput
                                source="volume"
                                validate={[
                                    minValue(0, 'Should be atleast 0'),
                                ]}
                            />
                        </SimpleFormIterator>
                    </ArrayInput>

                    {permissions === 'admin' && (
                        <ArrayInput source="authors">
                            <SimpleFormIterator>

                                <FormDataConsumer>
                                    {({
                                          formData,
                                          scopedFormData,
                                          getSource,
                                          ...rest
                                      }) =>
                                        scopedFormData && scopedFormData.user_id ? (
                                            <SelectInput
                                                source={getSource('role')}
                                                choices={[
                                                    {
                                                        id: 'headwriter',
                                                        name: 'Head Writer',
                                                    },
                                                    {
                                                        id: 'proofreader',
                                                        name: 'Proof reader',
                                                    },
                                                    {
                                                        id: 'cowriter',
                                                        name: 'Co-Writer',
                                                    },
                                                ]}
                                                {...rest}
                                                label="Role"
                                            />
                                        ) : null
                                    }
                                </FormDataConsumer>
                            </SimpleFormIterator>
                        </ArrayInput>
                    )}
                </FormTab>
                <FormTab label="resources.articles.terms.sender">
                    <TextInput
                        autoFocus
                        source="sender.name"
                        validate={required('Required field')}
                    />
                    <TextInput
                        autoFocus
                        source="sender.address"
                        validate={required('Required field')}
                    />

                    <DateInput
                        source="departure.date"
                    />
                </FormTab>

                <FormTab label="resources.articles.terms.receiver">
                    <TextInput
                        autoFocus
                        source="receiver.name"
                        validate={required('Required field')}
                    />
                    <TextInput
                        autoFocus
                        source="receiver.address"
                        validate={required('Required field')}
                    />

                    <DateInput
                        source="arrival.date"
                    />
                </FormTab>

                <FormTab label="resources.articles.terms.details">
                    <TextInput
                        autoFocus
                        source="info"
                    />

                    <FileInput
                        source="pdffile"
                        label="PDF-Template"
                        accept="application/pdf"
                    >
                        <FileField source="src" title="title" />
                    </FileInput>
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default ArticleEdit;
