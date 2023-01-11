import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
          <form>
            <IonItem lines="full">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" required></IonInput>
            </IonItem>
            <IonRow>
              <IonCol>
                <Link to="profilepage">
                  <IonButton type="button" color="danger" expand="block">Login</IonButton>
                </Link>
                <Link to="/forgotpassword">
                  <center><a className='text-sm'>Forgot Password?</a></center>
                </Link>
              </IonCol>
            </IonRow>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
