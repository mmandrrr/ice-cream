export const closeModal = (e,setClassName,classname,wrapper,close) => {
    if(e.target.classList.contains(wrapper) || e.target.classList.contains(close)) {
        setClassName(classname);
        document.querySelector('body').classList.remove('disable-scroll');
    }
}