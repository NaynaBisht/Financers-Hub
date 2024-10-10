import axios from 'axios';

const AUTH_SERVER_URL = process.env.OCEN_TOKEN_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export const getAccessToken = async () => {
    try {
        const response = await axios.post(AUTH_SERVER_URL, null, {
            params: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
        });

        return response.data; // This will include access_token
    } catch (error) {
        console.error('Error getting access token:', error.response.data);
        throw new Error('Unable to get access token');
    }
};
export const getTokenUsingAuthorizationCode = async (code) => {
    try {
        const response = await axios.post(AUTH_SERVER_URL, null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: YOUR_REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
        });

        return response.data; // This will include access_token
    } catch (error) {
        console.error('Error getting token using authorization code:', error.response.data);
        throw new Error('Unable to get access token using authorization code');
    }
};
