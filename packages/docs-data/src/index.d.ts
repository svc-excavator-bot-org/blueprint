/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

import { IDocsData } from "@blueprintjs/docs";

export interface IPackageInfo {
    /** Name of package. Ignored for documentation site versions. */
    name?: string;
    url: string;
    version: string;
}

export const docsData: IDocsData;
export const releasesData: IPackageInfo[];
export const versionsData: string[];
