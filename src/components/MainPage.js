import React from 'react'
import '../MainPage.css';
import pyramid from '../imgs/pyramid-1.svg';
import rectangle from '../imgs/Rectangle.png';
import Popup from './Popup';
import { useState ,useContext} from 'react';
import { useHistory } from 'react-router';
import { SignUpContext } from './SignUpContext';
const MainPage = () => {

    const {tokenAuth, emailAuth} = useContext(SignUpContext);
    const [userToken, setUserToken] = tokenAuth;
    const [userEmail, setUserEmail] = emailAuth;

    const [popupButtonWTF, setPopupButtonWTF] = useState();
    const [popupButtonInvite, setPopupButtonInvite] = useState();
    let history = useHistory();

    if(typeof userEmail === "undefined" || typeof userToken === "undefined"){
        history.replace("/");
    }

    const handleShop = () =>{
        /*alert("wtf");
        window.open('https://shop.definitelynotapyramidscheme.xyz/');*/
    }
    const invite = async() => {
        var myHeaders = new Headers();
        myHeaders.append("X-Auth-Token", "a6zEmu7ZzyXsdAcTkseN");
        myHeaders.append("X-Auth-Email", "ad@tesst.com");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": "invite@test.com"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://not-a-pyramid.herokuapp.com/api/v1/invite", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    return (
        <body className="screen-main">




            <label className="definitely-not-label">
                DefinitelyNotA<br />
                PyramidScheme
            </label>



            <table>
                        {/* <h3 className="leaderboard">LeaderBoard</h3> */}
                <tr>
                    <th>Leaderboard</th>
                    <th></th>
                </tr>
                <tr>
                    <td>elonmusk</td>
                    <td>73012</td>
                </tr>
                <tr>
                    <td>goatlover</td>
                    <td>67311</td>
                </tr>
                <tr>
                    <td>freebrittany</td>
                    <td>52088</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>7102 players</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>yousuck420</td>
                    <td>5921</td>
                </tr>
            </table>

            {/* <label className="at-least-label">
                at least you
                got a prize…
            </label>
            <label className="also-a-cool-label">
                also a
                cool prize!
            </label>
            <label className="super-crazy-label">
                super crazy
                amazing prize!!
            </label> */}
            {/* <label className="elonmusk">
                elonmusk
            </label>
            <label className="goatlover">
                goatlover
            </label>
            <label className="freebrittany">
                freebrittany
            </label>
            <label className="yousuck420">
                yousuck420
            </label> */}
            <div className="button-container">
                <input type="button" onClick={handleShop()} className="shop" value="-> shop"/>
                <input type="button" onClick={() => setPopupButtonInvite(true)} className="invite" value="-> invite"/>
                <Popup trigger={popupButtonInvite} setTrigger={setPopupButtonInvite}>
                    <h3>Invite URL</h3>
                </Popup >
                <input type="button" className="pressit" value="-> press it"/>
                <input type="button" onClick={() => setPopupButtonWTF(true)} className="wtf" value="wtf is this?"/>
                <Popup trigger={popupButtonWTF} setTrigger={setPopupButtonWTF}>
                    <h3>Rules</h3>
                </Popup >
            {/* <img src="rectangle" className="rectangle-input"/> */}
            </div>



            <div className="pyramid">
                <img src={pyramid} className="" />
            </div>

            <div className="countdown">
                <p>12d 7h 57m 48s</p>
            </div>
            {/* <img src={bg_grid} className="bg-grid" /> */}
        </body>
    )
}

export default MainPage
