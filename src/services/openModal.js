export const openModal = (setClassName,classname) => {
    document.querySelector('body').classList.add('disable-scroll');
    setClassName(classname);
}