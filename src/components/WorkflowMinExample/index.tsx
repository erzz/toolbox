import CodeBlock from "@theme/CodeBlock";

export default function WorkflowMinExample(props) {
  const id = props.workflow.split("/").pop().split(".")[0];
  const wf = require("yaml-loader!@site/.github/workflows/" + props.workflow);

  var requiredInputs = Object.keys(
    filterObject(wf.default.on.workflow_call.inputs, (val) => val.required === true)
  );
  var requiredSecrets = Object.keys(
    filterObject(wf.default.on.workflow_call.secrets, (val) => val.required === true)
  );

  function filterObject(obj, callback) {
    if (obj === null || typeof obj === "undefined") return {};
    return Object.fromEntries(Object.entries(obj).filter(([key, val]) => callback(val, key)));
  }

  return (
    <CodeBlock language="yaml" title="Bare minimum code to insert in your workflow" showLineNumbers>
      {"jobs:\n"}
      {"  " + id + ":\n"}
      {"    uses: ingka-group-digital/workflows/.github/workflows/" +
        id +
        ".yml@v" +
        props.version +
        "\n"}
      {(requiredInputs.length > 0 &&
        "    with:\n" +
          "      " +
          requiredInputs.map((i) => i + ": <your-value>").join("\n      ") +
          "\n") ||
        "    # no mandatory inputs\n"}
      {(requiredSecrets.length > 0 &&
        "    secrets:\n" +
          "      " +
          /*eslint no-template-curly-in-string: 0*/
          requiredSecrets.map((i) => i + ": ${{ secrets.YOUR_SECRET }}").join("\n      ") +
          "\n") ||
        "    # no mandatory secrets\n"}
    </CodeBlock>
  );
}
