import { FC, useMemo } from 'react';
import { FavoriteItem, compareFavoriteItem } from '../../types/FavoriteItem';
import { Autocomplete, Grid, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface FavoriteAutoCompleteProps {
  label: string;
  value: string;
  favoriteItems: FavoriteItem[];
  setFavoriteItems: (favoriteItems: FavoriteItem[]) => void;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

export const FavoriteAutoComplete: FC<FavoriteAutoCompleteProps> = (props) => {
  const favoriteOptions = useMemo(() => {
    // 非破壊的なtoSortedを使うべきだが，buildエラーとなるため，sortを使用
    return [...props.favoriteItems].sort(compareFavoriteItem).map((item) => item.item);
  }, [props.favoriteItems]);
  const isFavorite = useMemo(
    () => props.favoriteItems.some((field) => field.item === props.value),
    [props.value, props.favoriteItems]
  );

  const onClickFavoriteIcon = () => {
    const newFavoriteItem: FavoriteItem = {
      item: props.value,
      lastUsed: new Date().getTime(),
    };
    const newFavoriteItems = isFavorite
      ? props.favoriteItems.filter((item) => item.item !== props.value)
      : [...props.favoriteItems, newFavoriteItem];
    props.setFavoriteItems(newFavoriteItems);
  };

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={11}>
        <Autocomplete
          freeSolo
          options={favoriteOptions}
          filterOptions={() => favoriteOptions}
          renderOption={(p, option) => (
            <li {...p}>
              <Grid container justifyContent="space-between">
                <Grid>{option}</Grid>
                <Grid>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newFavoriteItems = props.favoriteItems.filter(
                        (item) => item.item !== option
                      );
                      props.setFavoriteItems(newFavoriteItems);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </li>
          )}
          onChange={(_, value) => props.onChange(value ?? '')}
          onInputChange={(_, value) => props.onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              variant="standard"
              value={props.value}
              onBlur={() => props.onBlur?.()}
            />
          )}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton disabled={!props.value} size="small" onClick={onClickFavoriteIcon}>
          {isFavorite ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};
