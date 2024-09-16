import Admonition from "@theme/Admonition";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import ScreenShots from "../../ScreenShots";

export default function Description(props) {
  let label = "Status: " + props.status;
  let admonitionType;
  let explanation;
  const isGHAS = props.tags.includes("ghas");
  const isCodeQL = props.tags.includes("codeql");
  switch (props.status) {
    case "experimental":
      admonitionType = "warning";
      label = "Status: experimental";
      explanation = "This workflow is relatively new and and not yet battle-hardened for all cases";
      break;
    case "production":
      admonitionType = "tip";
      label = "Status: production";
      explanation = "This workflow is stable and widely used in production environments.";
      break;
    case "deprecated":
      admonitionType = "danger";
      label = "Status: deprecated";
      explanation = "This workflow is no longer maintained. It may be removed in a future release.";
      break;
    default:
      admonitionType = "info";
      label = "Status: unknown";
      explanation = "This workflow has not been classified with a status.";
  }

  return (
    <div>
      <Admonition type={admonitionType} title={label}>
        {explanation}
      </Admonition>

      <div className={styles.container}>
        <div>
          <strong>{props.description}</strong>
        </div>
      </div>

      {props.screenshots && props.screenshots.length > 0 && (
        <ScreenShots screenshots={props.screenshots} />
      )}

      {isGHAS ? (
        <Admonition type="info" title="This workflow requires GitHub Advanced Security">
          You can find instructions to enable it{" "}
          <Link to={"/docs/tutorials-and-guides/ghas"}>here</Link>
        </Admonition>
      ) : null}

      {isCodeQL ? (
        <Admonition type="tip" title="CodeQL does not 'break the build'">
          <p>
            This workflow uses a CodeQL job. GitHub does not provide a method to break the build
            with CodeQL, it only reports findings to the Security tab.
          </p>
          <p>
            It is <strong>highly recommended</strong> to{" "}
            <Link to={"/docs/tutorials-and-guides/ghas#protection-rules-for-codeql"}>
              add a protection rule to your repository
            </Link>{" "}
            which will prevent merging of pull requests that introduce new CodeQL findings of
            significant severity.
          </p>
        </Admonition>
      ) : null}
    </div>
  );
}
