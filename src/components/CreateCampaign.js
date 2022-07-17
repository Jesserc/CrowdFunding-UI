import { Fragment } from "react";
import { Link } from 'react-router-dom';
const CreateCampaign = () => {
    return (
        <Fragment>
            <div className="row" style={{ alignItems: "center" }}>
                <div className="col-md-6">
                    <img src="/happy-people.jpeg" className="img-fluid rounded" alt="" />
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>Start a crowd funding campaign</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title">Campaign Title</label>
                                    <input type="text" id="title" className="form-control" placeholder="Campaign Title"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="target">Target Amount</label>
                                    <input type="number" min="0" className="form-control" placeholder="Campaign Amount"/>
                                </div>

                                <button className="btn btn-success mr-3">Create Campaign</button>
                                <Link className="btn btn-light" to="/">Back to Home</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CreateCampaign;