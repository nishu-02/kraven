const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

userInput.addEventListener('focus', () => {
    chatContainer.classList.add('expanded');
});

document.addEventListener('click', function(event) {
    if (!chatContainer.contains(event.target) && chatContainer.classList.contains('expanded')) {
        chatContainer.classList.remove('expanded');
    }
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim().toLowerCase(); // Convert to lowercase for easy matching

    if (message) {
        const userMessageElement = document.createElement('div');
        userMessageElement.textContent = input.value;
        userMessageElement.className = 'user-message';
        chatContainer.appendChild(userMessageElement);

        input.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;

        setTimeout(() => {
            let botResponse = '';

            // Start of the conversation
            if (message.includes('hello') || message.includes('hi')) {
                botResponse = "Hello! How can I assist you today? Do you have any questions about bike insurance?";
            }
            // Asking about bike insurance
            else if (message.includes('yes') || message.includes('bike insurance')) {
                botResponse = "Bike insurance provides financial protection for your bike. Would you like to know about the types of bike insurance?";
            }
            // Types of bike insurance
            else if (message.includes('types')) {
                botResponse = "There are two types: third-party liability and comprehensive insurance. Do you want more details on either?";
            }
            // Third-party insurance details
            else if (message.includes('third-party')) {
                botResponse = "Third-party insurance covers damage to others caused by your bike. It’s mandatory in many places. Would you like to know about comprehensive insurance?";
            }
            // Comprehensive insurance details
            else if (message.includes('comprehensive')) {
                botResponse = "Comprehensive insurance covers third-party liabilities and damage to your bike from accidents, theft, or disasters. Would you like to know how to claim bike insurance?";
            }
            // Claiming bike insurance
            else if (message.includes('claim')) {
                botResponse = "To claim bike insurance, inform your insurer, file an FIR (if needed), submit required documents, and your bike will be assessed by a surveyor. Anything else I can help with?";
            }
            // Ending conversation
            else if (message.includes('no') || message.includes('thanks') || message.includes('thank you')) {
                botResponse = "You're welcome! Feel free to ask if you have more questions. Have a great day!";
            }
            // Fallback response
            else {
                botResponse = "I'm here to help with bike insurance. Feel free to ask me any questions!";
            }

            const botMessageElement = document.createElement('div');
            botMessageElement.textContent = botResponse;
            botMessageElement.className = 'agent-message';
            chatContainer.appendChild(botMessageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);
    }
}
