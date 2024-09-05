import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function OutputList(props) {
  const wf = require('yaml-loader!@site/.github/workflows/' + props.workflow);
  const outputs = wf.default.on.workflow_call.outputs;

  if (outputs === undefined) {
    return <Admonition type="note" title="No outputs provided by this workflow" />;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.output}>Output</th>
            <th className={styles.outputDesc}>Description</th>
            <th className={styles.outputValue}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(outputs).map((value, idx) => {
            return (
              <tr className={idx} key={idx}>
                <td className={styles.output}>{value}</td>
                <td className={styles.outputDesc}>
                  {Object.prototype.hasOwnProperty.call(outputs[value], 'description')
                    ? outputs[value].description
                    : 'missing description'}
                </td>
                <td className={styles.outputValue}>
                  <code>{outputs[value].value}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
