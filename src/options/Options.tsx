import { Grid } from '@mui/material';

const OPTION_SYMBOLE = Symbol('Option');

const Options = () => {
  OPTION_SYMBOLE;
  return (
    <div className="p-2 h-screen w-screen">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className="flex justify-center mt-2 text-base">Options</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Options;
