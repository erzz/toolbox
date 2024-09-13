import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";

export default function ScreenShots(props) {
  let items = props.screenshots;
  function Item(props) {
    const image = require("@site/docs/workflows/" + props.item.img).default;
    return (
      <Paper>
        <img src={image} />
        <p>{props.item.description}</p>
      </Paper>
    );
  }

  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
