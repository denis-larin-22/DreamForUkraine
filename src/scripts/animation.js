const HULF = 0.5;

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

const options = { threshold: [HULF] };
const observer = new IntersectionObserver(onEntry, options);
const elementsRight = document.querySelectorAll('.el-animation-right');
const elementsLeft = document.querySelectorAll('.el-animation-left');
const elementsDown = document.querySelectorAll('.el-animation-down');

for (const elm of elementsRight) {
    observer.observe(elm);
}

for (const elm of elementsLeft) {
    observer.observe(elm);
}

for (const elm of elementsDown) {
    observer.observe(elm);
}