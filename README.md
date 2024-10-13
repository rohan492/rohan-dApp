# Rohan's dApp

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)

## Overview

This decentralized application (dApp) allows users to interact with their Solana wallet, performing various operations such as requesting airdrops, checking balances, sending tokens, and signing messages. Built with React, this dApp demonstrates core functionalities of Solana blockchain interaction.

## Features

1. **Wallet Connection**: Users can connect their Solana wallet to the dApp.
2. **Airdrop Request**: Users can request an airdrop of SOL tokens to their connected wallet.
3. **Balance Check**: Users can check the latest balance of their connected wallet.
4. **Token Transfer**: Users can send tokens from their connected wallet to another Solana address.
5. **Message Signing**: Users can sign messages using their connected wallet.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A Solana wallet (e.g., Phantom, Backpack)
- Basic knowledge of Solana and blockchain concepts

## Installation

To install the Solana Wallet Interaction dApp, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/rohan492/rohan-dApp.git
   ```

2. Navigate to the project directory:

   ```
   cd rohan-dApp
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Usage

To run the dApp locally:

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`

3. Connect your Solana wallet using the "Select Wallet" button.

4. Use the various features of the dApp:
   - Request an airdrop by specifying the amount and clicking "Request Airdrop"
   - See your wallet balance by just connecting your wallet / Doing transactions on your connected wallet
   - Send tokens by entering the recipient's address, amount, and clicking "Send"
   - Sign a message by entering the message and clicking "Sign Message"

## Technical Details

This dApp is built using the following technologies and libraries:

- React as the frontend framework
- Vite as the build tool and development server
- Solana Web3.js for Solana blockchain interactions
- Solana Wallet Adapter libraries for wallet connections:
  - @solana/wallet-adapter-base
  - @solana/wallet-adapter-react
  - @solana/wallet-adapter-react-ui
  - @solana/wallet-adapter-wallets
- @noble/curves for cryptographic operations
- TailwindCSS for styling

Development tools:

- ESLint for code linting
- Autoprefixer and PostCSS for CSS processing

This project uses **Vite** as the build tool, which provides fast build times and an efficient development experience. The combination of **React** with **TypeScript** ensures type safety and improved developer productivity.

The **Solana Wallet Adapter** libraries provide a seamless integration with various Solana wallets, making it easy for users to connect their preferred wallet to the dApp.

**TailwindCSS** is used for styling, allowing for rapid UI development with utility-first CSS classes.
