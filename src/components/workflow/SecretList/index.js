import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function SecretList(props) {
  const wf = require('yaml-loader!@site/.github/workflows/' + props.workflow);
  const secrets = wf.default.on.workflow_call.secrets;

  if (secrets === undefined) {
    return <Admonition type="note" title="There are no secrets defined in this workflow" />;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.secret}>Input</th>
            <th className={styles.secretDesc}>Description</th>
            <th className={styles.secretRequired}>Required</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(secrets).map((value, idx) => {
            return (
              <tr key={idx}>
                <td className={styles.secret}>{value}</td>
                <td className={styles.secretDesc}>
                  {Object.prototype.hasOwnProperty.call(secrets[value], 'description')
                    ? secrets[value].description
                    : 'missing description'}
                </td>
                <td className={styles.secretRequired}>
                  {Object.prototype.hasOwnProperty.call(secrets[value], 'required')
                    ? secrets[value].required.toString()
                    : 'false'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
