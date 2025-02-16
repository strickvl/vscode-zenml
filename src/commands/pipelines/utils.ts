// Copyright(c) ZenML GmbH 2024. All Rights Reserved.
// Licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at:
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.See the License for the specific language governing
// permissions and limitations under the License.
import { getZenMLServerUrl } from '../../utils/global';

/**
 * Gets the Dashboard URL for the corresponding ZenML pipeline run
 *
 * @param {string} id - The id of the ZenML pipeline run to be opened
 * @returns {string} - The URL corresponding to the pipeline run in the ZenML Dashboard
 */
export const getPipelineRunDashboardUrl = (id: string): string => {
  const PIPELINE_URL_STUB = 'SERVER_URL/workspaces/default/all-runs/PIPELINE_ID/dag';
  const currentServerUrl = getZenMLServerUrl();

  const pipelineUrl = PIPELINE_URL_STUB.replace('SERVER_URL', currentServerUrl).replace(
    'PIPELINE_ID',
    id
  );

  return pipelineUrl;
};

const pipelineUtils = {
  getPipelineRunDashboardUrl,
};

export default pipelineUtils;
