import styles from './styles.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function JobList(props) {
  const wf = require('yaml-loader!@site/.github/workflows/' + props.workflow);
  const jobs = wf.default.jobs;
  let result = [];
  for (const j in jobs) {
    result.push(GetJob(jobs[j]));
  }
  return result;
}

function GetJob({name, steps}) {
  return (
    <div key={name}>
      <Accordion>
        <AccordionSummary id={name} expandIcon={<ExpandMoreIcon />}>
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <table>
            <thead>
              <tr key={name}>
                <th className={styles.step}>Step</th>
                <th className={styles.uses}>Uses</th>
                <th className={styles.conditional}>Conditional</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, idx) => (
                <tr key={idx + step.name}>
                  <td key={idx + '-name'} className={styles.step}>
                    {step.name || 'Unnamed Step'}
                  </td>
                  <td key={idx + '-uses'} className={styles.uses}>
                    {step.uses || 'script'}
                  </td>
                  <td key={idx + '-if'} className={styles.conditional}>
                    {(step.if === undefined && 'false') || 'true'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
