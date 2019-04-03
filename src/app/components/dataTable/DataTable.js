import React, { Component } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/dataTables.buttons.js');
$.fn.dataTable.ext.errMode = 'none';
// import './datatable.css';
import './DataTable.scss';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';

var colvisbtn = {
  "extend": 'colvis',
  "text": '<i class="fa fa-bars" aria-hidden="true"></i>'
}

var printbtn = {
  "extend": 'print',
  "text": '<i class="fa fa-print" aria-hidden="true"></i>',
}

var collectionbtn = {
  "extend": 'collection',
  "text": '<i class="fa fa-download" aria-hidden="true"></i>',
  "buttons": [
    'copyHtml5',
    'excelHtml5',
    'pdfHtml5',
    'csvHtml5'
  ]
}

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    }
    this.jsonData = [
    { "type": '<div class="type" style="background:#595959"><div>', "stage": "Extraction","status":"Successful","step":"Validation Pending","count":"820", 
 'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
    { "type": "<div class='type' style='background:#737373'><div>", 
    "stage": "CLassification","status":"Complete","step":"--","count":"670",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>'},
    { "type": "<div class='type' style='background:#808080'><div>", "stage": "Extraction",
    "status":"Incomplete","step":"Need Validation","count":"490",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
    { "type": "<div class='type' style='background:#a6a6a6'><div>", "stage": "Extraction",
    "status":"Complete","step":"--","count":"510",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
    { "type": "<div class='type' style='background:#cccccc'><div>", "stage": "Extraction",
    "status":"Failed","step":"Waiting for new file","count":"419",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
    { "type": "<div class='type' style='background:#e6e6e6'><div>", "stage": "Extraction",
    "status":"Failed","step":"--","count":"520",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
    { "type": "<div class='type' style='background:#f2f2f2'><div>", "stage": "OCR",
    "status":"Success","step":"Validation Pending","count":"6s20",'ellipsis':'<i class="fa fa-ellipsis-h"></i>','angle-right':'<i class="fa fa-angle-right"></i>' },
  ];

    this.columns = [
      { data: 'type', title: '' },
      { data: 'stage', title: 'Stage' },
      { data: 'status', title: 'Status' },
      { data: 'step', title: 'Step' },
      { data: 'count', title: 'Count' },
      { data: 'ellipsis', title: '' },
      { data: 'angle-right', title: '' }
    ]
  }

  componentDidMount() {


    this.$el = $(this.el)

    this.$el.DataTable(
      {
        data: this.jsonData,
        columns: this.columns,
        "paging": true,
        "scrollX": true,
        "select": {
          style: "single",
          info: false,
          selector: true
        },
        // "order":this.props.orderType,
        "scrollX": true,
        "sDom": '<"d-flex justify-content-between h-15"<f><"p-0 dtButtonsDiv"B>>+ <"row h-75"<"col-sm-12 pr-0"rt>> + <"row h-10 paginate-border ml-0"<"col-sm-9 offset-sm-3"pl>>',
        "language": {
          "lengthMenu": "Display _MENU_ Records",
          "paginate": {
            "previous": '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            "next": '<i class="fa fa-angle-right" aria-hidden="true"></i>',

          },
          "infoFiltered": "",
          "sSearch": '<i class="fa fa-search posSearch position-absolute"></i>',
          "searchPlaceholder": "Search"
        },
        "buttons": [
          colvisbtn, collectionbtn, printbtn
        ]
      }
    )
    // $("div.modelName").html(this.props.modelname);
  }

  componentDidUpdate() {
    // this.formatData(this.props.tablevalues);
  }


  componentWillUnmount() {
    this.$el.DataTable().destroy(true);
  }

  render() {
    return (
      <div className="datatables h-100">
        <table id="infoTable" className="row-border h-100" width="100%" ref={el => this.el = el} />
      </div>
    );
  }
}

export default DataTable;

