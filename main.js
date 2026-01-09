let num = 0;

    function increase() {
        num++;
        update();
    }

    function decrease() {
        if (num > 0) num--;
        update();
    }

    function resetCount() {
        num = 0;
        update();
    }

    function update() {
        document.getElementById("count").innerText = num;
    }