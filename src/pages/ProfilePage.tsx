import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar,  IonItem, IonLabel, IonInput, } from '@ionic/react';
import { personOutline, mail, call, calendar } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {

  const [editingMode, setEditingMode] = useState(false)

  async function getUsers() {
    const users = await supabase.from('users').select()
    console.log(users)
  }

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
            <IonTitle size="large">Profile Page</IonTitle>
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
                    <div className='flex flex-row pl-8 p-4 items-center'>
                        <IonIcon icon={ personOutline } className='iconSize' />
                        <IonItem lines="none">
                          <IonInput type='text' readonly={editingMode ? false : true} value="Nikolaj Engstrøm Pregaard" style={{width: "300px"}}></IonInput>
                        </IonItem>
                    </div>
                    <div className='flex flex-row pl-8 p-4 items-center'>
                        <IonIcon icon={ mail } className='iconSize' />
                        <IonItem lines="none">
                          <IonInput type='text' readonly={editingMode ? false : true} value="Nikolajpregaard@gmail.com" style={{width: "300px", color: "black"}}></IonInput>
                        </IonItem>
                    </div>
                    <div className='flex flex-row pl-8 p-4 items-center'>
                        <IonIcon icon={ call } className='iconSize' />
                        <IonItem lines="none">
                          <IonInput type='text' readonly={editingMode ? false : true} value="+45 22 74 44 60" style={{width: "300px"}}></IonInput>
                        </IonItem>
                    </div>
                    <div className='flex flex-row pl-8 p-4 items-center'>
                        <IonIcon icon={ calendar } className='iconSize' />
                        <IonItem lines="none">
                          <IonInput type='text' readonly={editingMode ? false : true} value="09 / 07 / 1997" style={{width: "300px"}}></IonInput>
                        </IonItem>
                    </div>
                    <div className='pt-3 pl-[26%]'>
                        <IonButton type="button" color="secondary" className='w-48' onClick={() => setEditingMode(!editingMode)}>Edit Profile</IonButton>
                    </div>
                </div>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
