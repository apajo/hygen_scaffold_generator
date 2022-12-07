import * as React from 'react';
import {
  ArrayField,
  Datagrid,
  DateField,
  NumberField,
  ShowContextProvider,
  ShowView,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowController,
} from 'react-admin';
import ArticleTitle from './ArticleTitle';

const ArticleShow = () => {
    const controllerProps = useShowController();

    // const [locale] = useLocaleState();

    return (
        <ShowContextProvider value={controllerProps}>
            <ShowView title={<ArticleTitle />}>
                <TabbedShowLayout>
                    <Tab label="resources.articles.terms.goods">

                        <ArrayField source="goods">
                            <Datagrid bulkActionButtons={false}>
                                <TextField source="name" />
                                <NumberField
                                    source="weight"
                                />
                                <NumberField
                                    source="volume"
                                />
                            </Datagrid>
                        </ArrayField>

                    </Tab>
                    <Tab label="resources.articles.terms.sender">

                        <TextField
                            source="sender.name"
                        />
                        <TextField
                            source="sender.address"
                        />

                        <DateField
                            source="departure.date"
                        />

                    </Tab>
                    <Tab label="resources.articles.terms.receiver">

                        <TextField
                            source="receiver.name"
                        />
                        <TextField
                            source="receiver.address"
                        />

                        <DateField
                            source="arrival.date"
                        />

                    </Tab>
                    <Tab label="resources.articles.terms.details">

                        <TextField
                            source="info"
                        />

                        {/*<FileField*/}
                        {/*    source="pdffile"*/}
                        {/*    label="PDF-Template"*/}
                        {/*>*/}
                        {/*    <FileField source="src" title="title" />*/}
                        {/*</FileField>*/}

                    </Tab>
                </TabbedShowLayout>
            </ShowView>
        </ShowContextProvider>
    );
};

export default ArticleShow;
