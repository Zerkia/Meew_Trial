import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline, mail, call, calendar } from 'ionicons/icons';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Page - Display Name here?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
            <IonCol>
                <div className="pl-[38%] pt-4 pb-4" style={{ backgroundColor: "lightblue"}}>
                    <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                        <img src="https://www.w3schools.com/css/paris.jpg" alt="Profile Picture" style={{ height: "80px", width: "80px"}}></img>
                    </div>
                </div>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <div className="grid grid-cols-1 divide-y">
                    <div className='flex flex-row'>
                        <IonIcon icon={ personOutline } className='pl-8 pt-4 pr-4 iconSize' />
                        <p className='textSize pt-3 pb-2'>Nikolaj Engstrøm Pregaard</p>
                    </div>
                    <div className='flex flex-row'>
                        <IonIcon icon={ mail } className='pl-8 pt-4 pr-4 iconSize' />
                        <p className='textSize pt-3 pb-2'>nikolajpregaard@gmail.com</p>
                    </div>
                    <div className='flex flex-row'>
                        <IonIcon icon={ call } className='pl-8 pt-4 pr-4 iconSize' />
                        <p className='textSize pt-3 pb-2'>+45 22 74 44 60</p>
                    </div>
                    <div className='flex flex-row'>
                        <IonIcon icon={ calendar } className='pl-8 pt-4 pr-4 iconSize' />
                        <p className='textSize pt-3 pb-2'>09/07/1997</p>
                    </div>
                    <div className='pt-3 pl-[26%]'>
                        <IonButton type="button" color="secondary" className='w-48'>Edit Profile</IonButton>
                    </div>
                </div>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
