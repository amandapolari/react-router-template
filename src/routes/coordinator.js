export const goToHome = (navegate) => {
    navegate('/');
};

export const goToProfile = (navegate, name) => {
    navegate(`/profile/${name}`);
};
