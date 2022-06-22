import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './reducers/users';
import ArticlesReducer from './reducers/articles';
import NotificationsReducer from './reducers/notification';
import SiteReducer from './reducers/site';

export const store = configureStore({
    reducer:{
        users: UsersReducer,
        articles: ArticlesReducer,
        notifications: NotificationsReducer,
        site: SiteReducer
    }
})