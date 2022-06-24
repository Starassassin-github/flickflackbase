import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader, removeTokenCookie } from '../../utils/tools';
import axios from 'axios';

export const addArticle = createAsyncThunk(
    'articles/addArticle',
    async (article, { dispatch }) => {
        try {
            const request = await axios.post(`/api/articles/`, article, getAuthHeader());
            dispatch(successGlobal('Post created !!'))

            return request.data;
            
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }

)