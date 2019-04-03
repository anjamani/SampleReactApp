import React, { Component } from 'react';
import DataTable from '../../components/dataTable/DataTable';
import BarChart from '../../components/barChart/BarChart';

class LandingPage extends Component {
    render() {
        return (
            <div class="container">
                <div className="row my-3 d-flex justify-content-between">
                    
                        <div>Overall Status</div>
                        <div></div>
                </div>


                <div className="row">


                    <div className="col-12 col-md-4 p-0">
                        <BarChart />
                    </div>
                    <div className="col-12 col-md-8 p-0">
                        <DataTable />
                    </div>

                </div>
            </div>
        );
    }
}

export default LandingPage;