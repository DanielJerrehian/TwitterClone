import axios from 'axios';

import { writeAccessToken } from './localStorage'


export async function callApiPost(endPoint, body, accessToken) {
    const headersData = { 'Content-Type': 'application/json' };
    if (accessToken) {
        headersData.Authorization = `Bearer ${accessToken}`
    };
    const data = await axios.post(endPoint, body, { headers: headersData });
    if (data?.status === 200 || data?.status === 201 ) {
        return data?.data
    } else {
        return undefined;
    };
}


export async function callApiGet(endPoint, accessToken, refreshToken) {
    const headersData = { 'Content-Type': 'application/json' };
    if (accessToken) {
        headersData.Authorization = `Bearer ${accessToken}`
    };
    const data = await axios.get(endPoint, { headers: headersData });
    if (data?.status === 200 ) {
        return data?.data
    } 
    else {
        return undefined;
    }
}


export async function callApiDelete(endPoint, accessToken) {
    const headersData = { 'Content-Type': 'application/json' };
    if (accessToken) {
        headersData.Authorization = `Bearer ${accessToken}`
    };
    const data = await axios.delete(endPoint, { headers: headersData });
    if (data?.status === 200) {
        return data?.data
    }
}


export async function callApiRefreshAccessToken(refreshToken) {
    const headersData = { 'Content-Type': 'application/json' };
    if (refreshToken) {
        headersData.Authorization = `Bearer ${refreshToken}`
    };
    const data = await axios.get('/refresh-token', { headers: headersData });
    if (data?.status === 200) {
        writeAccessToken(data?.accessToken)
    }
}