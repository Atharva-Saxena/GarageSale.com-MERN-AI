const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/';

const generateDescription = async (title, images) => {
    try {
        const response = await axios.post(
            `${OPENAI_API_URL}completions`,
            {
                model: 'text-davinci-003',
                prompt: `Generate a product description for the following title: "${title}" and images: ${images.join(', ')}`,
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating description:', error);
        throw new Error('Failed to generate description');
    }
};

module.exports = {
    generateDescription,
};