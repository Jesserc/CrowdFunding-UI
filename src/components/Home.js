import { Fragment } from "react";
import { useHistory } from 'react-router-dom';
const Home = () => {

    const history = useHistory();

    const createCampaignClickHandler = () => {
        console.log('Create Campaign')
        history.push('/create-campaign');
    }

    const exploreCampaignClickHandler = () => {
        console.log('Explore Campaign');
        history.push('/explore-campaign');
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <h2>Fund raise and receive funding in crypto currencies</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sed repudiandae, illum amet veniam tempora fugit, laudantium ad nam unde vitae eum doloribus incidunt quidem quia velit nostrum doloremque nihil.</p>
                    <button onClick={createCampaignClickHandler} className="btn btn-success mr-3">Create Campaign</button>
                    <button onClick={exploreCampaignClickHandler} className="btn btn-secondary">Explore Campaigns</button>
                </div>

                <div className="col-md-6">
                    <img src="women.webp" className="img-fluid rounded" alt="" />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <h4>Recent Campaigns</h4>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-heading">Operation Get Vaccinated</h5>
                            <p><strong>Target:</strong> 4ETH</p>
                            <p><strong>Received:</strong> 2ETH</p>
                            <button className="btn btn-secondary">Donate</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-heading">Health is wealth</h5>
                            <p><strong>Target:</strong> 4ETH</p>
                            <p><strong>Received:</strong> 2ETH</p>
                            <button className="btn btn-secondary">Donate</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-heading">Getting a laptop for Web3Bridge</h5>
                            <p><strong>Target:</strong> 4ETH</p>
                            <p><strong>Received:</strong> 2ETH</p>
                            <button className="btn btn-secondary">Donate</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-heading">Poverty Alleviation Scheme</h5>
                            <p><strong>Target:</strong> 4ETH</p>
                            <p><strong>Received:</strong> 2ETH</p>
                            <button className="btn btn-secondary">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;