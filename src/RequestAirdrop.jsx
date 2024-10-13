import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

const RequestAirdrop = ({ count, setCount }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const requestAirdrop = async () => {
    try {
      const pubKey = wallet.publicKey;
      if (!pubKey) throw new Error("Wallet not connected!");
      const amount = document.getElementById("amount").value;
      const airdropSignature = await connection.requestAirdrop(
        pubKey,
        amount * LAMPORTS_PER_SOL
      );
      const latestBlockhash = await connection.getLatestBlockhash();
      const confirmStrategy = {
        blockHash: latestBlockhash.blockHash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
        signature: airdropSignature,
      };
      const confirmation = await connection.confirmTransaction(confirmStrategy);
      if (confirmation?.value?.err) {
        throw new Error(
          `Transaction Failed: ${confirmation?.value?.err?.toString()}`
        );
      }
      setCount(count + 1);
      alert(`${amount} SOL airdropped at ${pubKey?.toBase58()}`);
    } catch (e) {
      alert(e?.message || "An Error Occurred");
    }
    document.getElementById("amount").value = 0;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input id="amount" placeholder="Amount..." type="text" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
};

export default RequestAirdrop;
