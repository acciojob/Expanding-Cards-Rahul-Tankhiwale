//your JS code here. If required.

    // Grab all panels
    const panels = document.querySelectorAll('.panel');

    function setActivePanel(target) {
      panels.forEach(panel => {
        const isActive = (panel === target);
        panel.classList.toggle('active', isActive);
        panel.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    // Click and keyboard support for accessibility
    panels.forEach(panel => {
      panel.addEventListener('click', () => setActivePanel(panel));
      panel.addEventListener('keydown', (e) => {
        // allow Enter or Space to activate
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActivePanel(panel);
        }
      });
    });

    // Make sure the first panel is active by default (already set in markup,
    // but this ensures ARIA and classes stay consistent)
    if (panels.length > 0) {
      setActivePanel(panels[0]);
    }
