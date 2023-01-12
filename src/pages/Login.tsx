import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {

  const history = useHistory()

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    history.push('/profilepage')
  }

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
          <form onSubmit={(e) => handleSubmit(e)}>
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
                <IonButton type="submit" color="danger" expand="block">Login</IonButton>
                <Link to="/forgotpassword">
                  <center><p className='text-sm'>Forgot Password?</p></center>
                </Link>
              </IonCol>
            </IonRow>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
