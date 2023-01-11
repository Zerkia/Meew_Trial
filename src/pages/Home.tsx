import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MeeW - Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hello World</IonTitle> {/* Not sure what exactly this is used for, might need to be deleted */}
          </IonToolbar>
        </IonHeader>
        <div className="absolute top43 left-1/4">
          <h2 style={{fontFamily: 'sans-serif'}}>Welcome to MeeW</h2>
          <Link to="/login">
            <IonButton className="button">Login</IonButton>
          </Link>
          <span className="buttonSpace"/>
          <Link to="/register">
            <IonButton className="button">Register</IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
