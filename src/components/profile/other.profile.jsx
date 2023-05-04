//for practice profile: Data modify and update:
import Bio from "./Bio";
import Links from "./LInks";
import { Profile } from "./profile";
import Skills from "./Skills";

class OtherProfile extends Profile {
    render() {
        return (
            <div className="container mt-5 border border-gray-400 p-10 rounded">
                <Bio name='Atiqur Rahman KAJAL'
                    title='FullStack Developer, Javascript'
                />

                <Skills
                    skillA='React'
                    skillB='Angular'
                    skillC='Vue'
                />

                <Links
                    link1='Instagram'
                    link2='Line'
                    link3='Hotmail'
                />
            </div>

        )
    }
}

export default OtherProfile