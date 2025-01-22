let count = 0;

    function increment() {
      count++;
      updateCounter();
    }

    function decrement() {
      count--;
      updateCounter();
    }

    function resetCounter() {
      count = 0;
      updateCounter();
    }

    function updateCounter() {
      document.getElementById('counter').textContent = count;
    }