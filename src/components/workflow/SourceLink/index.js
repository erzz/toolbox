import CodeBlock from '@theme/CodeBlock';
import YAML from 'yaml';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SourceLink(props) {
  const file = require('yaml-loader!@site/.github/workflows/' + props.workflow);

  return (
    <div>
      <Accordion>
        <AccordionSummary caption="click to view" id="full-source" expandIcon={<ExpandMoreIcon />}>
          Full source code for this workflow
        </AccordionSummary>
        <AccordionDetails>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              'https://github.com/ingka-group-digital/workflows/blob/main/.github/workflows/' +
              props.workflow
            }
          >
            View on Github
          </a>
          <CodeBlock
            title={'.github/workflows/' + props.workflow}
            language="yml"
            showLineNumbers={true}
          >
            {YAML.stringify(file.default, {
              blockQuote: 'literal',
              lineWidth: 0,
              commentString: '#',
            })}
          </CodeBlock>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
