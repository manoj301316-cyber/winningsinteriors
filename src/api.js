const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function createLead(payload) {
  try {
    const response = await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.detail ||
          data.message ||
          "Unable to submit your request. Please try again."
      );
    }

    return data;
  } catch (error) {
    console.error("Lead submission failed:", error);

    throw new Error(
      error.message ||
        "Unable to connect to the server."
    );
  }
}