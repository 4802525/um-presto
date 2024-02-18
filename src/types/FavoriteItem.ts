export interface FavoriteItem {
  item: string;
  lastUsed: number;
}

export const compareFavoriteItem = (a: FavoriteItem, b: FavoriteItem) => {
  if (a.lastUsed < b.lastUsed) {
    return 1;
  }
  if (a.lastUsed > b.lastUsed) {
    return -1;
  }
  return 0;
};
