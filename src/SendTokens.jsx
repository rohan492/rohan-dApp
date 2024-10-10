import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React from "react";

const SendTokens = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendTokens = async () => {
    const to = document.getElementById("to").value;
    const amount = document.getElementById("sendAmount").value;

    console.log(to);
    console.log(amount);

    const pubKey = wallet.publicKey;
    const transaction = new Transaction();

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: pubKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input type="text" placeholder="To..." id="to" />
      <input type="text" placeholder="Amount..." id="sendAmount" />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
};

export default SendTokens;
