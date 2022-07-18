import { Fragment, useState } from "react";
import { ethers } from "ethers";
import { Link, useHistory } from "react-router-dom";
import abi from "../contract/contract.json";

const CreateCampaign = () => {
  let history = useHistory();

  // Contract Address & ABI
  const contractAddress = "0xE6182497a7210Fc3fc6F1f81E7028F9Db7b92666";
  const contractABI = abi.abi;

  const [campaignTarget, setCampaignTarget] = useState("");
  const [campaignTitle, setCampaignTitle] = useState("");

  // const handleCreateCampaign = (e) => {
  //   e.preventDefault();
  //   console.log(campaignAmount);
  //   console.log(campaignTitle);
  // };

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const campaign = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("Creating campaign...");
        const createCampaignReceipt = await campaign.createCampaign(
          campaignTitle,
          campaignTarget
        );

        const getAllCampaigns = await campaign.getAllCampaigns();
        console.log(getAllCampaigns);

        console.log("Transaction", createCampaignReceipt);
        setCampaignTitle("");
        setCampaignTarget("");
        history.push("/explore-campaign");
        // const createCampaignResult = await transactionReceipt.wait();

        // console.log(
        //   "Donation successful: transaction result",
        //   transactionResult
        // );
        // transactionReceipt && setTransactionSuccess(false);
        // transactionReceipt && transactionSuccessfulNotification();

        // Clear the form fields.
      }
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

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
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Campaign Title"
                    onChange={(e) => setCampaignTarget(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="target">Target Amount</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    placeholder="Campaign Amount"
                    onChange={(e) => setCampaignTarget(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success mr-3"
                  onClick={handleCreateCampaign}
                >
                  Create Campaign
                </button>
                <Link className="btn btn-light" to="/">
                  Back to Home
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCampaign;
