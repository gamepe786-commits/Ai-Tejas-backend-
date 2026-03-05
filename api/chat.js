export default async function handler(req, res) {

const API_KEY = "YOUR_GEMINI_API_KEY";

const { message } = req.body;

try {

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [
{
parts: [{ text: message }]
}
]
})
}
);

const data = await response.json();

const reply = data.candidates[0].content.parts[0].text;

res.status(200).json({ reply });

}
catch(error){

res.status(500).json({ reply:"AI error" });

}

}
