import fs from "fs";
import path from "path";
import { WarpFactory } from "warp-contracts";
import { ArweaveSigner, DeployPlugin } from "warp-contracts-plugin-deploy";
import { initialState } from "./oracle";

const warp = WarpFactory.forMainnet().use(new DeployPlugin());

const wallet = JSON.parse(fs.readFileSync("./arwallet.json", "utf-8"));
const contractSrc = fs.readFileSync(
  path.join(__dirname, "./dist/oracle.js"),
  "utf8"
);

warp
  .deploy({
    wallet: new ArweaveSigner(wallet),
    initState: JSON.stringify(initialState),
    src: contractSrc,
  })
  .then(console.log);
