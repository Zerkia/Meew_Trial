import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Forgot Password</IonTitle>
          </IonToolbar>
        </IonHeader>
          <form>
            <IonItem lines="full">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
            <IonRow>
              <IonCol>
                <IonButton type="submit" color="danger" expand="block">Send</IonButton>
              </IonCol>
            </IonRow>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
