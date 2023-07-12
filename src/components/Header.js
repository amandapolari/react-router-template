import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledButton } from '../style';
import { goToHome, goToProfile } from '../routes/coordinator';

function Header() {
    const navegate = useNavigate();

    // console.log(navegate);

    // const goToHome = () => {
    //     navegate('/');
    // };

    // const goToProfile = (name) => {
    //     navegate(`/profile/${name}`);
    // };

    return (
        <StyledHeader>
            <StyledButton
                onClick={() => {
                    goToHome(navegate);
                }}
            >
                Ir para página inicial
            </StyledButton>
            <StyledButton
                onClick={() => {
                    goToProfile(navegate, 'easley');
                }}
            >
                Ir para página de perfil
            </StyledButton>
        </StyledHeader>
    );
}

export default Header;
