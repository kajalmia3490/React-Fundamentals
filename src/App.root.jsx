// import logo from './logo.svg';
import './App.css';
// some component create and apply with import file:
import { Employee } from './components/employee';
import { Student } from './components/student';
import { Teacher } from './components/teacher';

// profile component create:
import { Profile } from './components/profile/profile';

// reuse skills data: 
import Skills from './components/profile/Skills';

// props file import:
import Props from './components/props/props';

// otherProfile file import: 
import OtherProfile from './components/profile/other.profile';

// // pass function as props;
import Apps from './components/props/app';
// import CopyApp from './components/props/app.component';
import NewApp from './components/props/app.component';

// state import:
import State from './components/state/state';

// style import:
import Style from './components/style/style';

// events import:
import Events from './components/events/events';

// inputs and elements import:
import Inputs from './components/inputs_elelments/inputs';

// UncontrolledForm import:
import UncontrolledForm from './components/form/form_uncontrolled';

// ControlledForm import:
import ControlledForm from './components/form/form_controlled';

// split form import: 
import SplitForm from './components/form/split_form/split';

// signup form:
import Signup from './components/form/signup_form/signup_form';

// open page:
import Open_page from './components/form/n_e_p_form/open_page';

function App() {
  return (
    <div className='container m-5'>
      {/* student, teacher, employee component created */}
      <Student />
      <Teacher />
      <Employee />

      {/* profile component created */}
      <Profile />

      {/* reuseable component data */}
      <div className='mt-5'>
        <OtherProfile />
      </div>

      {/* props */}
      <h2>Hello, <Props name='Muskan' />! Welcome </h2>
      <Skills
        skillA='Node JS'
        skillB='Express JS'
        skillC='MongoDB'
      />

      <Apps />
      {/* <CopyApp /> */}
      <NewApp />

      {/* state operation */}
      <State />

      {/* style */}
      <Style />

      {/* events handling */}
      <Events />

      {/* inputs and elements */}
      <Inputs /> <br />

      {/* form */}
      <UncontrolledForm />
      <ControlledForm />

      {/* split_form */}
      <SplitForm />

      {/* signup form */}
      <Signup />

      {/* open page */}
      <Open_page />
    </div>

  )
}

export default App;