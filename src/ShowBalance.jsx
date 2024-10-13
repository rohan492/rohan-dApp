import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect } from "react";

const ShowBalance = ({ count }) => {
  const { publicKey } = useWallet();
  const { connection } = useConnection();

  const getUserBalance = async () => {
    const pubKey = publicKey;
    if (pubKey) {
      const balance = await connection?.getBalance(pubKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  };

  useEffect(() => {
    getUserBalance();
  }, [publicKey, count]);

  return (
    publicKey && (
      <div>
        Balance: <span id="balance"></span> SOL
      </div>
    )
  );
};

export default ShowBalance;
