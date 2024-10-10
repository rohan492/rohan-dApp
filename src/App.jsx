import React, { FC, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
import RequestAirdrop from "./RequestAirdrop";
import ShowBalance from "./ShowBalance";
import SendTokens from "./SendTokens";
import SignMessage from "./SignMessage";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="w-screen flex flex-col justify-center items-center gap-12">
            <WalletMultiButton />
            <RequestAirdrop />
            <ShowBalance />
            <SendTokens />
            <SignMessage />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
