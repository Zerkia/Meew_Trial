import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonRow, IonCol } from '@ionic/react';
import { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import supabase from '../supabaseClient';
import './Login.css';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lmsg, setLmsg] = useState('')
  const history = useHistory()

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error){
      console.log(error)
      setLmsg('Error in username or Password')
    } else {
      console.log(data)
      setLmsg('')
      history.push('/profilepage')
    }
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
              <IonInput type="email" onIonInput={(e:any) => setEmail(e.target.value)} required></IonInput>
            </IonItem>
            <IonItem lines="full">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" onIonInput={(e:any) => setPassword(e.target.value)} required></IonInput>
            </IonItem>
            <IonRow>
              <IonCol>
                <center><p>{lmsg}</p></center>
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
