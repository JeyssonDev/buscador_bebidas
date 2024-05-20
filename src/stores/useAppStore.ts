import { create } from 'zustand';
import { RecipesSliceType, createRecipesSlice } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoriteSlices';
import {
  NotificationSliceType,
  createNotificationSlice,
} from './notificationSlice';

export const useAppStore = create<
  RecipesSliceType & FavoritesSliceType & NotificationSliceType
>((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
}));
