import {Config, interpolate} from "@pulumi/pulumi";

const config = new Config();

export const IMPORTANT_VARIABLE = config.requireSecret("importantVariable");
export const OTHER_VARIABLE = config.requireSecret("otherVariable");
export const COMPOSITE_VARIABLE = interpolate`${IMPORTANT_VARIABLE}-${OTHER_VARIABLE}`;
