import Carousel from "react-material-ui-carousel";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

export default function ScreenShots(props) {
  let items = props.screenshots;
  function Item(props) {
    const image = require("@site/docs/workflows/" + props.item.img).default;
    return (
      <Card variant="plain">
        <AspectRatio variant="soft" objectFit="contain" maxHeight="400px">
          <img src={image} alt={props.item.description} />
        </AspectRatio>
        <Typography level="title-sm">{props.item.description}</Typography>
      </Card>
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
