* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.chat-container {
    width: 400px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.chat-box {
    max-height: 400px;
    overflow-y: auto;
    flex-grow: 1;
    margin-bottom: 20px;
}

.chat-message {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
}

.bot-message {
    background-color: #e0e0e0;
}

.user-message {
    background-color: #007bff;
    color: white;
    text-align: right;
}

#userInput {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: calc(100% - 20px);
}

#sendButton {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#sendButton:hover {
    background-color: #0056b3;
}