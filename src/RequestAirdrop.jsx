import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const requestAirdrop = () => {
    const pubKey = wallet.publicKey;
    if (!pubKey) throw new Error("Wallet not connected!");
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(pubKey, amount * LAMPORTS_PER_SOL);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input id="amount" placeholder="Amount..." type="text" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
};

export default RequestAirdrop;
