export function parseAgentResponse(raw: string) {
  if (!raw) return null;

  // Extract the first JSON object in the string
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) {
    console.warn("No JSON found in AI response:", raw);
    return null;
  }

  try {
    return JSON.parse(match[0]);
  } catch (e) {
    console.warn("Failed to parse AI JSON:", match[0], e);
    return null;
  }
}
