export const closeModal = (e,setClassName,classname,wrapper,close,span) => {
    if(e.target.classList.contains(wrapper) || e.target.classList.contains(close) || e.target.classList.contains(span)) {
        setClassName(classname);
        document.querySelector('body').classList.remove('disable-scroll');
    }
}