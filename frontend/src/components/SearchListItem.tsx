import { Link } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";

import ROUTES from "../../src/utils/ROUTES";
import { clearText } from "../../src/utils/common";
import { IMAGE_NOT_FOUND } from "../utils/constants";

import type { ThingInfo } from "../../src/utils/types";

interface Props extends ThingInfo {
  number: number;
}

const SearchListItem = ({
  number,
  description,
  title,
  year,
  id,
  image,
  thumbnail,
}: Props) => {
  return (
    <Grid container spacing={3} borderBottom={1}>
      <Grid item xs={1}>
        {number}
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <Link to={`${ROUTES.boardGameItem}${id}`}>
          <Box
            component="img"
            sx={{
              height: 150,
              width: "100%",
              objectFit: "cover",
            }}
            src={image ? image : IMAGE_NOT_FOUND}
            alt={title}
          />
        </Link>
      </Grid>
      <Grid item xs={12} md={7} lg={9}>
        <Box>
          <Typography variant="h5">
            <Link style={{ color: "blue" }} to={ROUTES.boardGameItem + id}>
              {title}
            </Link>
            <span>({year ? year : "N/A"})</span>
          </Typography>
        </Box>

        <Typography>{clearText(description)}</Typography>
      </Grid>
    </Grid>
  );
};

export default SearchListItem;
