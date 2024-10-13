import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();

  const signMessageHandler = async () => {
    if (!publicKey) throw new Error("Wallet not connected!");
    if (!signMessage)
      throw new Error("Wallet does not support message signing");

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    // Needs to be done in Web2 backend
    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
      throw new Error("Message Signature Invalid!");

    // console.log(`Message Signature: ${bs58.encode(signature)}`);
    alert(
      `Successfully Signed Message: ${message}\n\n` +
        `Message Signature: ${bs58.encode(signature)}`
    );
    document.getElementById("message").value = null;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input tyoe="text" id="message" placeholder="Message..." />
      <button onClick={signMessageHandler}>Sign Message</button>
    </div>
  );
};

export default SignMessage;
