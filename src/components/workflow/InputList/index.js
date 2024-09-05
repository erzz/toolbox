import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

export default function InputList(props) {
  const wf = require('yaml-loader!@site/.github/workflows/' + props.workflow);
  const inputs = wf.default.on.workflow_call.inputs;

  if (inputs === undefined) {
    return <Admonition type="note" title="The are no inputs defined in this workflow" />;
  } else {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.input}>Input</th>
            <th className={styles.type}>Type</th>
            <th className={styles.inputDesc}>Description</th>
            <th className={styles.inputRequired}>Required</th>
            <th className={styles.inputDefault}>Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(inputs).map((value, idx) => {
            return (
              <tr className={idx} key={idx}>
                <td className={styles.input}>{value}</td>
                <td className={styles.type}>{inputs[value].type || 'not set'}</td>
                <td className={styles.inputDesc}>
                  {Object.prototype.hasOwnProperty.call(inputs[value], 'description')
                    ? inputs[value].description
                    : 'missing description'}
                </td>
                <td className={styles.inputRequired}>
                  {Object.prototype.hasOwnProperty.call(inputs[value], 'required')
                    ? inputs[value].required.toString()
                    : 'false'}
                </td>
                <td className={styles.inputDefault}>
                  <code>
                    {Object.prototype.hasOwnProperty.call(inputs[value], 'default')
                      ? inputs[value].default.toString()
                      : 'null'}
                  </code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
