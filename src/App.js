import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateCampaign from "./components/CreateCampaign";
import ExploreCampaign from "./components/ExploreCampaign";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

function App() {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.rinkeby],
    [
      alchemyProvider({
        alchemyId:
          "17a7c7bb9c244cdf24dfa694e0f6a4e7a45e669c5e07fd4aaba4f5735137f3c0",
      }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <div className="wrapper mt-5">
            <div className="container mb-5">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  bitFundMe
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav mr-auto">
                    {/* <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li> */}
                  </ul>
                  <span class="navbar-text">
                    <ConnectButton />
                  </span>
                </div>
              </nav>
            </div>
            <div className="container">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>

                <Route path="/create-campaign">
                  <CreateCampaign />
                </Route>

                <Route path="/explore-campaign">
                  <ExploreCampaign />
                </Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
