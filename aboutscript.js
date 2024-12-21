document.addEventListener('scroll', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        if (isInViewport(member)) {
            member.classList.add('animate');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
