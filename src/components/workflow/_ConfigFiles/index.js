import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';

export default function ConfigFile(props) {
  if (props.configs === undefined || props.configs === null) {
    return (
      <Admonition
        type="note"
        title="This workflow does not provide any default configuration files"
      />
    );
  } else {
    return (
      <Admonition type="info" title="This workflow provides some default configuration files">
        <p>
          They are provided to get you started with sensible defaults. It's OK to replace them in
          order to tweak for your own preferences if required.
        </p>
        <ul>
          {props.configs.map((config, idx) => {
            return (
              <li key={config}>
                <Link to={'https://github.com/erzz/toolbox/blob/main/configs/' + config}>
                  {config}
                </Link>
              </li>
            );
          })}
        </ul>
      </Admonition>
    );
  }
}
