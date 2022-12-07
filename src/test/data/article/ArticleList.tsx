import * as React from 'react';
import {Fragment, memo} from 'react';
import BookIcon from '@mui/icons-material/Book';
import {Box, Chip, useMediaQuery} from '@mui/material';
import {styled, Theme} from '@mui/material/styles';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import {
  ArrayField,
  BulkDeleteButton,
  BulkExportButton,
  ChipField,
  CreateButton,
  DatagridConfigurable,
  DateField,
  downloadCSV,
  EditButton,
  ExportButton,
  FilterButton,
  List,
  SearchInput,
  SelectColumnsButton,
  ShowButton,
  SimpleList,
  SingleFieldList,
  TextField,
  TextInput,
  TopToolbar,
  useTranslate,
} from 'react-admin';

import ResetViewsButton from './ResetViewsButton';

export const ArticleIcon = BookIcon;

const QuickFilter = ({ label, source, defaultValue }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const postFilter = [
    <SearchInput source="q" alwaysOn />,
    <TextInput source="title" defaultValue="Qui tempore rerum et voluptates" />,
    <QuickFilter
        label="resources.posts.fields.commentable"
        source="commentable"
        defaultValue
    />,
];

const exporter = posts => {
    const data = posts.map(post => ({
        ...post,
        backlinks: lodashGet(post, 'backlinks', []).map(
            backlink => backlink.url
        ),
    }));
    return jsonExport(data, (err, csv) => downloadCSV(csv, 'posts'));
};

const StyledDatagrid = styled(DatagridConfigurable)(({ theme }) => ({
    '& .title': {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .hiddenOnSmallScreens': {
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    '& .column-tags': {
        minWidth: '9em',
    },
    '& .publishedAt': { fontStyle: 'italic' },
}));

const ArticleListBulkActions = memo(({ ...props }) => (
    <Fragment>
        <ResetViewsButton {...props} />
        <BulkDeleteButton {...props} />
        <BulkExportButton {...props} />
    </Fragment>
));

const ArticleListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const ArticleListActionToolbar = ({ children, ...props }) => (
    <Box sx={{ alignItems: 'center', display: 'flex' }}>{children}</Box>
);

const rowClick = (id, resource, record) => {
    return 'show';
};

const ArticlePanel = ({ id, record, resource }) => (
    <div dangerouslySetInnerHTML={{ __html: record.body }} />
);

const ArticleList = () => {
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            filters={postFilter}
            sort={{ field: 'departure.date', order: 'DESC' }}
            exporter={exporter}
            actions={<ArticleListActions />}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record =>
                        new Date(record.published_at).toLocaleDateString()
                    }
                />
            ) : (
                <StyledDatagrid
                    bulkActionButtons={<ArticleListBulkActions />}
                    rowClick={rowClick}
                    expand={ArticlePanel}
                    omit={['average_note']}
                >
                    <TextField source="id" />

                    <DateField
                        source="departure.date"
                    />
                    <DateField
                        source="arrival.date"
                    />

                    <TextField source="sender.address" cellClassName="title" />
                    <TextField source="sender.address" cellClassName="title" />

                    <TextField source="sender.name" cellClassName="title" />
                    <TextField source="receiver.name" cellClassName="title" />

                    <ArrayField
                        label="Goods"
                        source="goods"
                    >
                        <SingleFieldList>
                            <ChipField source="name" size="small" />
                        </SingleFieldList>
                    </ArrayField>

                    <ArticleListActionToolbar>
                        <EditButton />
                        <ShowButton />
                    </ArticleListActionToolbar>
                </StyledDatagrid>
            )}
        </List>
    );
};

export default ArticleList;
