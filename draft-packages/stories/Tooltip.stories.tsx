import * as React from "react"

import { Tag } from "@kaizen/draft-tag"
import { Tooltip } from "@kaizen/draft-tooltip"

export default {
  title: "Tooltip (React)",
}

export const DefaultBelowKaizenSiteDemo = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tooltip position="below" text="This is below the tooltip">
      <Tag>Below</Tag>
    </Tooltip>
  </div>
)

DefaultBelowKaizenSiteDemo.story = {
  name: "Default - Below (Kaizen Site Demo)",
  component: Tooltip,
  parameters: {
    info: {
      text: `
      import { Tooltip } from "@kaizen/draft-tooltip"
      `,
    },
  },
}

export const DefaultAbove = () => (
  <div
    style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
  >
    <div style={{ display: "inline-block", position: "relative" }}>
      <Tooltip position="above" text="This is above the tooltip">
        <Tag>Above</Tag>
      </Tooltip>
    </div>
  </div>
)

DefaultAbove.story = {
  name: "Default - Above",
}
