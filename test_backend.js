async function testBackend() {
    console.log("Pre-flight check hitting localhost API...");
    try {
        const r = await fetch("http://localhost:8080/auth/users/ab33cd73-ce64-4b0f-b8ec-5ca8f6ee8a80/role", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: "company_owner" })
        });
        const data = await r.json();
        console.log("Status:", r.status);
        console.log("Body:", data);
    } catch (e) {
        console.error("Fetch failed:", e.message);
    }
}
testBackend();
