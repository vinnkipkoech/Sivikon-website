const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? '';

export async function postContactRequest(payload) {
  const url = `${apiBase}/api/contact`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Failed to submit request.');
    throw new Error(errorText || 'Failed to submit request.');
  }

  return response.json();
}
