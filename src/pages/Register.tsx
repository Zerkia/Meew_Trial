import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import '../components/preventDefault';
import './Register.css';
import supabase from '../supabaseClient';

const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState(0);
  const [birthday, setBirthday] = useState('');
  const [Rmsg, setRmsg] = useState('');
  const [Lmsg, setLmsg] = useState('');
  const [user, setUser] = useState('');
  const [session, setSession] = useState('');


  const history = useHistory()

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullname,
          phonenumber,
          birthday
        }
      }
    })
    console.log(password)
    console.log(email)
    console.log(phonenumber)
    /* history.push('/login') */
  }

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" onChange={(e) => setEmail((e.target as HTMLInputElement).value)} required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" onChange={(e) => setPassword((e.target as HTMLInputElement).value)} required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Confirm Password</IonLabel> {/* Figure out how to make this label require matching "password" label */}
            <IonInput type="password" onChange={(e) => setPassword2((e.target as HTMLInputElement).value)} required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Full Name</IonLabel>
            <IonInput type="text" onChange={(e) => setFullname((e.target as HTMLInputElement).value)} required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput type="tel" onChange={(e) => setPhonenumber((e.target as HTMLInputElement).valueAsNumber)} required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">Birthday</IonLabel>
            <IonInput type="date" onChange={(e) => setBirthday((e.target as HTMLInputElement).value)} required></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
                <IonButton type="submit" color="danger" expand="block">Register</IonButton>
                <center><p>{Rmsg}</p></center>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
