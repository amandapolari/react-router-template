import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledButton } from '../style';

function Header() {
    const navegate = useNavigate();

    // console.log(navegate);

    const goToHome = () => {
        navegate('/');
    };

    const goToProfile = (name) => {
        navegate(`/profile/${name}`);
    };

    return (
        <StyledHeader>
            <StyledButton
                onClick={() => {
                    goToHome();
                }}
            >
                Ir para página inicial
            </StyledButton>
            <StyledButton
                onClick={() => {
                    goToProfile('easley');
                }}
            >
                Ir para página de perfil
            </StyledButton>
        </StyledHeader>
    );
}

export default Header;
