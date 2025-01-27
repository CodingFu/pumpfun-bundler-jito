import { createKeypairs } from "./src/createKeys";
import { buyBundle } from "./src/jitoPool";
import { sender } from "./src/senderUI";
import { sellXPercentagePF } from "./src/sellFunc";
import promptSync from "prompt-sync";
import { sellXPercentageRAY } from "./src/sellRay";
import prompts from "prompts";

const prompt = promptSync();

async function main() {
  let running = true;

  while (running) {
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

    switch (response.value) {
      case "createKeypairs":
        console.log("Creating keypairs...");
        await createKeypairs();
        break;
      case "sender":
        await sender();
        break;
      case "buyBundle":
        await buyBundle();
        break;
      case "sellXPercentagePF":
        await sellXPercentagePF();
        break;
      case "sellXPercentageRAY":
        await sellXPercentageRAY();
        break;
      case "exit":
        running = false;
        break;
      default:
        console.log("Invalid option, please choose again.");
    }
  }

  console.log("Exiting...");
  process.exit(0);
}

main().catch((err) => {
  console.error("Error:", err);
});
