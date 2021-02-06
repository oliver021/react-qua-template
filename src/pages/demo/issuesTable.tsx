import { Table, TableColumn } from "rendition";

const columns: TableColumn<any>[] = [
    {
        field: 'user',
        label: 'Username',
        sortable: true,
    },
    {
        field: 'category',
        label: 'Category Issue',
        sortable: true,
    },
    {
        field: 'desc',
        label: 'Descrption',
        sortable: true,
    },
    {
        field: 'date',
        label: 'At Emitted',
        sortable: true,
    }
];

const data = [
    {
        "user": "Jonh Doe",
        "category": "Info",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    },
    {
        "user": "Jake Silver",
        "category": "Warn",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    },
    {
        "user": "Junior Bell",
        "category": "Info",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    },
    {
        "user": "Dana Font",
        "category": "Support",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    },
    {
        "user": "Jonh Silver",
        "category": "Work",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    },
    {
        "user": "Jonh Power",
        "category": "Warn",
        "desc": "A simple verification",
        "date": (new Date).toLocaleDateString()
    }
];

export default function IssuesTable(){
    return <Table data={data} columns={columns}/>;
}