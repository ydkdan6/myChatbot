const apiUrl = 'https://chat-gpt-ai-bot.p.rapidapi.com/GenerateAIWritter';

        document.addEventListener('DOMContentLoaded', () => {
            const userMessageInput = document.getElementById('userMessage');
            const sendMessageButton = document.getElementById('sendMessageButton');
            const responseContainer = document.getElementById('response-container');

            sendMessageButton.addEventListener('click', async () => {
                const userMessage = userMessageInput.value;
                
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'fc0474e369msh629603dc776f650p12e6f5jsn5b0bcf1a8f3a',
                        'X-RapidAPI-Host': 'chat-gpt-ai-bot.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(`${apiUrl}?prompt=${encodeURIComponent(userMessage)}`, options);
                    const result = await response.text();
                    responseContainer.textContent = result;
                } catch (error) {
                    console.error(error);
                }
            });
        });