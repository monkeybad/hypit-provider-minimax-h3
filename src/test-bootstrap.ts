import { realpathSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { register } from "tsx/esm/api";

register();

const endpointModule = new URL(import.meta.resolve("@hypit/hypit/endpoint"));
const distributionRoot = realpathSync.native(fileURLToPath(new URL("../../../", endpointModule)));
const { installDistributionPackageResolution } = await import(
  new URL("packages/loader/src/node/distribution-resolution.ts", pathToFileURL(`${distributionRoot}/`)).href
);
installDistributionPackageResolution([distributionRoot]);
