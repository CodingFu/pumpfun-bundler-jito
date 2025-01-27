import { MAINNET_FARM_POOLS } from "@raydium-io/raydium-sdk";
import prompts from "prompts";

async function main() {
  const response = await prompts({
    type: "select",
    name: "value",
    message: "Choose an option",
    choices: [
      { title: "Create Keypairs", value: "createKeypairs" },
      { title: "Pre Launch Checklist", value: "sender" },
      { title: "Create Pool Bundle", value: "buyBundle" },
      { title: "Sell % of Supply on Pump.Fun", value: "sellXPercentagePF" },
      { title: "Sell % of Supply on Raydium", value: "sellXPercentageRAY" },
      { title: "Exit", value: "exit" },
    ],
  });

  console.log(response);
}

main();
