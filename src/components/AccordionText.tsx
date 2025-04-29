import React from "react";

const AccordionText = () => {
  return (
    <ol type="1" className="gap-2">
      <li>Go to: (https://github.com/settings/tokens)</li>
      <li>
        Click &quot;Fine-grained tokens&quot; → then click &quot;Generate new
        token&quot;
      </li>
      <li> Choose your GitHub username as the account</li>
      <li>
        Give the token a name like: <b> `My Repo Access`</b>
      </li>
      <li>
        Select expiration: 90 days is fine (or <b>“No expiration”</b>)
      </li>
      <li>
        <b>Under Repository access</b>, click <b>“Only select repositories”</b>
        and choose the ones you want your Custom GPT to access
      </li>
      <li>
        Under <b>Repository Permissions</b> ,{" "}
        <b>
          select: - Contents → Read-only - Commit statuses → Read-only -
          Metadata (Mandatory) → Read-only{" "}
        </b>
      </li>
      <li>
        Click <b>&quot;Generate token&quot;</b>
      </li>
      <li>
        Copy the token shown (it starts with `ghp_...`) Paste it into the field
        above Copy the token shown (it starts with `ghp_...`)
      </li>
      <li> Paste it into the field above</li>
    </ol>
  );
};

export default AccordionText;
