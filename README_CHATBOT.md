# Lemuel's AI Chatbot Integration

The AI Chatbot is integrated into the portfolio to provide instant information about Lemuel Jan Suico's professional background, projects, and experiences.

## Features
- **Knowledge Base:** Automatically uses data from `constants.tsx` (Experiences, Projects, Blogs, Recognitions).
- **Fallback Logic:** If the AI cannot find an answer in the knowledge base, it directs the user to contact Lemuel directly via email or phone.
- **Simulated Human Response:** Includes a mandatory 5-second delay to simulate a thoughtful response.
- **Input Constraint:** Limits user input to 50 words to optimize token usage and maintain focus.
- **Theme Support:** Fully responsive and adapts to both Light and Dark modes.

## Integration Steps

### 1. API Key Setup
The chatbot uses the Google Gemini API. Ensure you have a valid API key from [Google AI Studio](https://aistudio.google.com/).
In your environment, the key is accessed via `process.env.GEMINI_API_KEY`.

### 2. Knowledge Base Configuration
The chatbot's knowledge is derived from `constants.tsx`. To update what the AI knows:
- Edit the `EXPERIENCES`, `PROJECTS`, `BLOGS`, or `RECOGNITIONS` arrays in `constants.tsx`.
- The chatbot will automatically pick up these changes on the next reload.

### 3. Customizing the System Prompt
If you want to change how the AI behaves:
- Open `src/components/Chatbot.tsx`.
- Locate the `systemInstruction` property in the `handleSend` function.
- You can modify the instructions to change the AI's tone or specific fallback messages.

### 4. Adjusting Response Delay
The 5-second delay is implemented in `src/components/Chatbot.tsx` using a `setTimeout` that calculates the remaining time from a 5000ms target. You can adjust this value if needed.

## Technical Details
- **Model:** `gemini-3-flash-preview`
- **Library:** `@google/genai`
- **Styling:** Tailwind CSS with custom animations (animate-in, fade-in, slide-in).
- **Icons:** Lucide-style SVG icons.
