<p align="center">
  <img src="https://github.com/juuroudojo/images/blob/main/camino-logo.png" height="150" />
</p>

<br/>

# 🌎 Camino Micropayments

Presentation: [The Block Busters take on Micropayments](https://docs.google.com/presentation/d/1a8bAahlMXEtdFIStZGAMrZxFMZjWQTOXDuLCnVZVEaA/edit?usp=sharing)

This project has two parts:
- Smart Contracts under the `paymentdistributor/` folder
- The multifunctional UI (customer, tour operator, supplier) to demontraste everything in the `ui/` folder

## STEP 1: 

Compile the contracts:

```bash
cd paymentdistributor/scripts/
npm install
npx hardhat run scripts/deploy-payment-distributor.ts --network columbus
npx hardhat run scripts/deploy-supplier-escrow.ts --network columbus
```

## STEP 2: 

Start the local dev server:

```bash
cd ui
npm install
npm run dev
```

and navigate to the URL provided by npm to access the UI.
