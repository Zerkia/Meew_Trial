import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './ProfileList.css';

const ProfileList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
            <IonCol>
                <div className="grid grid-cols-1 divide-y">
                    <div className='flex flex-row'>
                        <div className='pl-6 pt-4 pr-4'>
                            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                                <img src="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg" alt="Profile Picture" className='profilePic'></img>
                            </div>
                        </div>
                        <p className='textSize pt-6 pb-6'>Person 1</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pl-6 pt-4 pr-4'>
                            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="Profile Picture" style={{ height: "48px", width: "48px"}}></img>
                            </div>
                        </div>
                        <p className='textSize pt-6 pb-6'>Person 2</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pl-6 pt-4 pr-4'>
                            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="Profile Picture" style={{ height: "48px", width: "48px"}}></img>
                            </div>
                        </div>
                        <p className='textSize pt-6 pb-6'>Person 3</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pl-6 pt-4 pr-4'>
                            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="Profile Picture" style={{ height: "48px", width: "48px"}}></img>
                            </div>
                        </div>
                        <p className='textSize pt-6 pb-6'>Person 4</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='pl-6 pt-4 pr-4'>
                            <div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"> {/* circle around icon */}
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="Profile Picture" style={{ height: "48px", width: "48px"}}></img>
                            </div>
                        </div>
                        <p className='textSize pt-6 pb-6'>Person 5</p>
                    </div>
                    
                </div>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ProfileList;
