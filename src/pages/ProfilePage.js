import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { MainContainer } from '../style';

function ProfilePage() {
    const params = useParams();

    // todo objeto:
    // console.log(params);
    // vendo todo objeto vejo que name é o nome da propriedade:
    // console.log(params.name);

    return (
        <MainContainer>
            <Header />
            <h1>Página acerca do {`${params.name}`}</h1>
        </MainContainer>
    );
}

export default ProfilePage;
