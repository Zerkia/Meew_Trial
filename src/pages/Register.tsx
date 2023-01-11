import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
import '../components/preventDefault';
import './Register.css';

const Register: React.FC = () => {

  const handleClick = (e:React.MouseEvent<HTMLIonButtonElement>) => {
    e.preventDefault();
    console.log("Default prevented");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonItem lines="full">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" required></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonLabel position="floating">Confirm Password</IonLabel> {/* Figure out how to make this label require matching "password" label */}
              <IonInput type="password" required></IonInput>
            </IonItem>
            <IonRow>
              <IonCol>
                  <IonButton type="submit" color="danger" expand="block" onClick={(e) => handleClick(e)}>Register</IonButton> {/* Doesn't actually preventDefault, fix */}
              </IonCol>
            </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Register;
