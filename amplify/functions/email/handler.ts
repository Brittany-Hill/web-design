import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import fetch from 'node-fetch';

const WEB3FORMS_ACCESS_KEY = "d36f3135-7068-45bf-a9f4-cf05c93f3d4c";

export const handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
    try {
        const body = JSON.parse(event.body || '{}');
        const { name, email, message } = body;

        if (event.httpMethod === 'OPTIONS') {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                body: JSON.stringify({ message: 'CORS preflight response' }),
            };
            callback(null, response);
            return;
        }

        const response = await fetch('https://api.web3forms.com/submit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                apikey: WEB3FORMS_ACCESS_KEY,
                name,
                email,
                message
            }),
        });
        const result = await response.json();
        const lambdaResponse = {
            statusCode: response.status,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(result),
        };

        callback(null, lambdaResponse);
    } catch (error) {
        console.error('Error:', error);
        const lambdaResponse = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify({ error: 'Failed to submit the form' }),
        };

        callback(null, lambdaResponse);
    }
};