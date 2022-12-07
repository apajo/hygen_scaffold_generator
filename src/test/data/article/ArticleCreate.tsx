import * as React from 'react';
import {useMemo} from 'react';
import {
  ArrayInput,
  Create,
  DateInput,
  FileField,
  FileInput,
  minValue,
  NumberInput,
  required,
  SaveButton,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  useNotify,
  useRedirect,
} from 'react-admin';
import {FormTab, TabbedForm} from "ra-ui-materialui";

const ArticleCreateToolbar = props => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar>
            <SaveButton label="ra.action.save" variant="text" />
            <SaveButton
                label="post.action.save_and_show"
                type="button"
                variant="text"
                mutationOptions={{
                    onSuccess: data => {
                        notify('ra.notification.created', {
                            type: 'info',
                            messageArgs: { smart_count: 1 },
                        });
                        redirect('show', 'posts', data.id);
                    },
                }}
            />
        </Toolbar>
    );
};

const goodsDefaultValue = [
    {
        name: '',
        weight: 0,
        volume: 0,
    },
];
const ArticleCreate = () => {
    const defaultValues = useMemo(
        () => ({
            average_note: 0,
        }),
        []
    );

    const dateDefaultValue = useMemo(() => new Date(), []);

    return (
        <Create redirect="edit">
            <TabbedForm
                toolbar={<ArticleCreateToolbar />}
                defaultValues={defaultValues}
            >
                <FormTab label="resources.articles.terms.goods">
                    <ArrayInput
                        source="goods"
                        defaultValue={goodsDefaultValue}
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
                        defaultValue={dateDefaultValue}
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
                        defaultValue={dateDefaultValue}
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
        </Create>
    );
};

export default ArticleCreate;
