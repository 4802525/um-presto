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

export const FavoriteAutoComplete: FC<FavoriteAutoCompleteProps> = ({
  label,
  value,
  favoriteItems,
  setFavoriteItems,
  onChange,
  onBlur,
}) => {
  const favoriteOptions = useMemo(() => {
    // 非破壊的なtoSortedを使うべきだが，buildエラーとなるため，sortを使用
    return [...favoriteItems].sort(compareFavoriteItem).map((item) => item.item);
  }, [favoriteItems]);
  const isFavorite = useMemo(
    () => favoriteItems.some((field) => field.item === value),
    [value, favoriteItems]
  );

  const onClickFavoriteIcon = () => {
    const newFavoriteItem: FavoriteItem = {
      item: value,
      lastUsed: new Date().getTime(),
    };
    const newFavoriteItems = isFavorite
      ? favoriteItems.filter((item) => item.item !== value)
      : [...favoriteItems, newFavoriteItem];
    setFavoriteItems(newFavoriteItems);
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
                      const newFavoriteItems = favoriteItems.filter((item) => item.item !== option);
                      setFavoriteItems(newFavoriteItems);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </li>
          )}
          onChange={(_, value) => onChange(value ?? '')}
          onInputChange={(_, value) => onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="standard"
              value={value}
              onBlur={() => onBlur?.()}
            />
          )}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton disabled={!value} size="small" onClick={onClickFavoriteIcon}>
          {isFavorite ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};
